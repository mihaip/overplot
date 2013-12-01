var containerNode;
var map;
var quotesOverlay = new QuotesOverlay(quotes);
var neighborhoodsOverlay = new NeighborhoodsOverlay(neighborhoods);

function load() {
  if (!GBrowserIsCompatible()) return;

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
  map = new GMap2(containerNode);

  map.enableDoubleClickZoom();

  map.addControl(new GSmallMapControl());
  map.setCenter(new GLatLng(40.731711, -73.987715), 13);
  resizeMap();
  map.setCenter(new GLatLng(40.731711, -73.987715), 13);

  map.addOverlay(quotesOverlay);
  map.addOverlay(neighborhoodsOverlay);

  window.onresize = resizeMap;
}

function resizeMap() {
  var width, height;

  // all except Explorer
  if (window.innerHeight) {
    width = window.innerWidth;
    height = window.innerHeight;
  }
  // Explorer 6 Strict Mode
  else {
    width = document.documentElement.clientWidth;
    height = document.documentElement.clientHeight;
  }

  var headerHeight = getNode("header").offsetHeight;
  height -= headerHeight;

  containerNode.style.width = width + "px";
  containerNode.style.height = height + "px";

  map.checkResize();
  if (quotesOverlay.map) {
    quotesOverlay.updateVisibleQuotes();
  }
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
  var matchBounds = new GLatLngBounds();
  var matchCenter = [0, 0];

  for (var i = 0, quoteSet; quoteSet = quotes[i]; i++) {
    var matches = quoteSet.filterForSearch(terms);

    if (matches) {
      matchBounds.extend(quoteSet.point);
      matchCenter[0] += quoteSet.point.lat();
      matchCenter[1] += quoteSet.point.lng();

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

    var newZoom = map.getBoundsZoomLevel(matchBounds);

    if (newZoom < LARGE_ZOOM_THRESHOLD) {
      newZoom = LARGE_ZOOM_THRESHOLD;
    }

    matchCenter[0] /= matchingLocations;
    matchCenter[1] /= matchingLocations;

    map.setCenter(new GLatLng(matchCenter[0], matchCenter[1]), newZoom);
  }
}

function clearSearch() {
  removeClass(document.body, "search");
  for (var i = 0, quoteSet; quoteSet = quotes[i]; i++) {
    quoteSet.resetSearch();
  }
}

var shufflePanInterval = null;

function shuffle() {
  // Since we can't stop the panning in the middle, we have to wait until it
  // finishes before allowing another one, otherwise the pixel delta
  // computation will be off
  if (shufflePanInterval) {
    return;
  }

  if (hasClass(document.body, "search")) {
    clearSearch();
  }

  if (map.getZoom() != 15) {
    // This occasionally throws an exception, we just ignore it
    try {map.setZoom(15);} catch (e) {;}
  }

  var quote = quotes[Math.floor(Math.random() * quotes.length)];

  window.console.log(quote.location);

  var currentLoc = map.fromLatLngToDivPixel(map.getCenter());
  var quoteLoc = map.fromLatLngToDivPixel(quote.getPoint());

  var delta = new GSize(currentLoc.x - quoteLoc.x, currentLoc.y - quoteLoc.y);

  map.panBy(delta);

  shufflePanInterval = window.setInterval(function() {
    if (map.getCenter().distanceFrom(quote.getPoint()) < 5) {
      quote.showInfoWindow();
      window.clearInterval(shufflePanInterval);
      shufflePanInterval = null;
    }
  }, 500);
}


function initStatus() {
  // Trailing spaces needed for MSIE
  getNode("quote-count").innerHTML = totalQuoteCount + " ";
  getNode("location-count").innerHTML = quotes.length + " ";
  getNode("latest-timestamp").innerHTML =
      new Date(latestTimestamp * 1000).toLocaleDateString();
}
