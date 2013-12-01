var containerNode;
var map;

function load() {
  var feedbackLinkNode = getNode("feedback-link");
  feedbackLinkNode.href = "mailto:" + String.fromCharCode(109, 105, 104, 97, 105, 46, 112, 97, 114, 112, 97, 114, 105, 116, 97, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109);

  if (isSafari()) {
    document.body.className = "safari";
  } else if (isGecko()) {
    document.body.className = "gecko";
  } else if (isMsie()) {
    document.body.className = "msie";
  }

  initStatus();

  containerNode = document.getElementById("map");
  map = new google.maps.Map(containerNode, {
    center: new google.maps.LatLng(40.731711, -73.987715),
    zoom: 13,
    panControl: false,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL
    }
  });


 var neighborhoodsOverlay = new NeighborhoodsOverlay(neighborhoods, map);
 var quotesOverlay = new QuotesOverlay(quotes, map);

  window.onresize = function() {
    if (quotesOverlay.map) {
      quotesOverlay.updateVisibleQuotes();
    }
  };
}

function runSearch() {
  var query = getNode("search").value;
  query = query.toLowerCase();
  var rawTerms = tokenize(query);
  var terms = [];

  for (var term in rawTerms) {
    if (term) {
      terms.push(term);
    }
  }

  if (terms.length == 0) {
    clearSearch();
    return;
  }

  var searchStart = new Date().getTime();

  var matchingQuotes = 0;
  var matchingLocations = 0;
  var matchBounds = new google.maps.LatLngBounds();

  for (var i = 0, quoteSet; quoteSet = quotes[i]; i++) {
    var matches = quoteSet.filterForSearch(terms);

    if (matches) {
      matchBounds.extend(quoteSet.point);
      matchingQuotes += matches;
      matchingLocations++;
    }
  }
  var searchEnd = new Date().getTime();
  window.console.log("search: " + (searchEnd - searchStart) + "ms");

  addClass(document.body, "search");

  getNode("search-quote-count").innerHTML = matchingQuotes;
  getNode("search-location-count").innerHTML = matchingLocations;

  if (matchingLocations) {
    map.setZoom(LARGE_ZOOM_THRESHOLD);
    map.setCenter(matchBounds.getCenter());
  }
}

function clearSearch() {
  removeClass(document.body, "search");
  for (var i = 0, quoteSet; quoteSet = quotes[i]; i++) {
    quoteSet.resetSearch();
  }
}

function shuffle() {
  if (hasClass(document.body, "search")) {
    clearSearch();
  }

  if (map.getZoom() != 15) {
    // This occasionally throws an exception, we just ignore it
    try {map.setZoom(15);} catch (e) {;}
  }

  google.maps.event.addListenerOnce(map, "idle", function() {
      quote.showInfoWindow();
  });
  var quote = quotes[Math.floor(Math.random() * quotes.length)];
  map.panTo(quote.getPoint());
}


function initStatus() {
  // Trailing spaces needed for MSIE
  getNode("quote-count").innerHTML = totalQuoteCount + " ";
  getNode("location-count").innerHTML = quotes.length + " ";
  getNode("latest-timestamp").innerHTML =
      new Date(latestTimestamp * 1000).toLocaleDateString();
}
