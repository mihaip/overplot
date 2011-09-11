var LARGE_ZOOM_THRESHOLD = 15;
var MEDIUM_ZOOM_THRESHOLD = 13;

var POPULAR_THRESHOLD = 10;

var totalQuoteCount = 0;
var latestTimestamp = 0;

var NEIGHBORHOOD_COLORS = [
  "#00681c", "#cc0060", "#008391", "#241af0", "#5b1094", "#846600", "#13cfe5", 
  "#790619"
];
var neighborhoodColorIndex = 0;

function Neighborhood(name, quoteCount, outlinePoints, lat, lng, renderVertices) {
  this.name = name;
  this.quoteCount = quoteCount;
  
  this.outlinePoints = [];
  for (var i = 0, pair; pair = outlinePoints[i]; i++) {
    this.outlinePoints.push(new GLatLng(pair[0], pair[1]));
  }
  this.outlinePoints.push(this.outlinePoints[0]);
  
  this.point = new GLatLng(lat, lng);
  
  var markerNode = newNode("div");
  markerNode.className = "neighborhood-marker";
  
  markerNode.innerHTML = name + ' <span class="quote-count">(' + quoteCount + ")</span>";
  
  this.markerNode = markerNode;
  
  this.renderPoints = [];
  
  for (var i = 0; i < renderVertices.length; i++) {
    this.renderPoints.push(this.outlinePoints[renderVertices[i]]);
  }
  
  this.color = NEIGHBORHOOD_COLORS[(neighborhoodColorIndex++) % NEIGHBORHOOD_COLORS.length];
}

Neighborhood.prototype.getMarkerNode = function() {
  return this.markerNode;
}

Neighborhood.prototype.getPoint = function() {
  return this.point;
}

Neighborhood.prototype.display = function() {
  map.setCenter(this.point, LARGE_ZOOM_THRESHOLD);
}

Neighborhood.prototype.getPolygon = function() {
  return new GPolyline(this.renderPoints, this.color, 5);
}

function QuoteSet(location, lat, lng, neighborhoodIndex, quotes) {
  this.location = location;
  this.lat = lat;
  this.lng = lng;
  this.neighborhood = neighborhoodIndex != -1 
                      ? neighborhoods[neighborhoodIndex]
                      : null;
  this.quotes = quotes;
  totalQuoteCount += quotes.length;
  
  this.point = new GLatLng(this.lat, this.lng);
  this.iconNode = null;
  this.infoWindowNode = null;
}

QuoteSet.prototype.getPoint = function() {
  return this.point;
}

QuoteSet.prototype.getIconNode = function() {
  if (!this.iconNode) {
    var quoteCount = this.quotes.length;
    this.iconNode = newNode("div");
    
    var className = "marker";
    
    if (quoteCount >= POPULAR_THRESHOLD) {
      className += " marker-popular";
    }
    
    if (this.neighborhood) {
      className += " marker-in-neighborhood";
    }
    
    this.iconNode.className = className;
    this.iconNode.quoteSet = this;
    this.iconNode.title = this.location;
    
    this.iconNode.innerHTML = "<span>" + quoteCount + "</span>";
  }
  
  return this.iconNode;
}

QuoteSet.prototype.getIconNodeBounds = function() {
  var tl = new GPoint(this.iconNode.offsetLeft, this.iconNode.offsetTop);
  var br = new GPoint(tl.x + this.iconNode.offsetWidth, tl.y + this.iconNode.offsetHeight);
  
  return new GBounds([tl, br]);
}

QuoteSet.prototype.getQuotes = function() {
  if (this.matchedSearch) {
    return this.matchingQuotes;
  } else {
    return this.quotes;
  }
}

QuoteSet.prototype.showInfoWindow = function() {
  map.closeInfoWindow();
  map.openInfoWindow(this.point, 
                     this.getInfoWindowNode());
}

QuoteSet.prototype.getInfoWindowNode = function() {
  if (!this.infoWindowNode) {
    this.infoWindowNode = newNode("div");
    this.infoWindowNode.className = "quote-info-window";
    
    var headerNode = newNode("h3");
    this.linkNode = newNode("a");
    this.linkNode.target = "_blank";
    headerNode.appendChild(this.linkNode);
    this.titleNode = newNode("span");
    this.linkNode.appendChild(this.titleNode);
    this.infoWindowNode.appendChild(headerNode);
    
    this.bodyNode = newNode("div");
    this.bodyNode.className = "body";
    this.infoWindowNode.appendChild(this.bodyNode);
    
    var controllerNode = newNode("div");
    controllerNode.className = "controller";
    if (this.quotes.length > 1) {
      var self = this;
      
      var prevNode = newNode("span");
      prevNode.className = "button";
      prevNode.innerHTML = "&laquo;";
      prevNode.onclick = function() {
        self.displayQuote(self.currentQuoteIndex - 1);
        
        return false;
      }
      controllerNode.appendChild(prevNode);
      
      this.statusNode = newNode("span");
      this.statusNode.className = "status";
      controllerNode.appendChild(this.statusNode);

      var nextNode = newNode("span");
      nextNode.className = "button";
      nextNode.innerHTML = "&raquo;";
      nextNode.onclick = function() {
        self.displayQuote(self.currentQuoteIndex + 1);

        return false;
      }
      controllerNode.appendChild(nextNode);
      
    } else {
      controllerNode.style.display = "none";
    }
    this.infoWindowNode.appendChild(controllerNode);
    
    var locationNode = newNode("address");
    locationNode.innerHTML = this.location;
    this.infoWindowNode.appendChild(locationNode);
  }
  
  this.displayQuote(Math.floor(Math.random() * this.getQuotes().length));
  
  return this.infoWindowNode;
}

QuoteSet.prototype.displayQuote = function(index) {
  var quotes = this.getQuotes();
  index = (index + quotes.length) % quotes.length;

  if (index == this.currentQuoteIndex) return;

  this.currentQuoteIndex = index;
  
  var quote = quotes[index];
  
  this.linkNode.href = 
    "http://www.overheardinnewyork.com/archives/" + quote.id + ".html";
  this.titleNode.innerHTML = quote.title;
  this.bodyNode.innerHTML = quote.quote;
  
  if (this.quotes.length > 1) {
    this.statusNode.innerHTML = (index + 1) + " of " + quotes.length;
  }
  
  if (!map.getInfoWindow().isHidden()) {
      this.infoWindowNode.style.display = "none";
      map.openInfoWindow(this.point,
                         this.infoWindowNode);
      this.infoWindowNode.style.display = "";
   }
}

QuoteSet.prototype.filterForSearch = function(terms) {
  function containsTerms(s) {
    var tokens = tokenize(s);
    
    for (var i = 0, term; term = terms[i]; i++) {
      if (!(term in tokens)) {
        return false;
      }
    }
    
    return true;
  }
  
  this.resetSearch();
  
  var matchingQuotes = [];
  
  if (containsTerms(this.location)) {
    matchingQuotes = this.quotes;
  } else {
    for (var i = 0, quote; quote = this.quotes[i]; i++) {
      if (containsTerms(quote.quote)) {
        matchingQuotes.push(quote);
      }
    }
  }
  
  this.matchedSearch = matchingQuotes.length > 0;
  
  if (this.matchedSearch) {
    // Make sure we've initted the icon node  
    var iconNode = this.getIconNode();
    
    addClass(iconNode, "hit");
    iconNode.firstChild.innerHTML = matchingQuotes.length;
    
    this.matchingQuotes = matchingQuotes;
  }
  
  return matchingQuotes.length;
}

QuoteSet.prototype.resetSearch = function() {
  if (this.matchedSearch) {
    this.iconNode.firstChild.innerHTML = this.quotes.length;
    removeClass(this.iconNode, "hit");
    this.matchedSearch = false;
    
    this.matchingQuotes = null;
  }
}

function Quote(id, title, quote, source, timestamp) {
  this.id = id;
  this.title = title;
  this.quote = quote;
  this.source = source;
  this.timestamp = timestamp;
  
  if (timestamp > latestTimestamp) {
    latestTimestamp = timestamp;
  }
}

function QuotesOverlay(quotes) {
  GOverlay.call(this);
  
  this.map = null;
  this.quotes = quotes;
  this.visibleQuotes = {};
}

QuotesOverlay.prototype.initialize = function(map) {
  this.map = map;
  this.parentNode = map.getPane(G_MAP_MARKER_PANE);
  
  // To handle clicks in the shadow, adding a simple handler to
  // G_MAP_MARKER_MOUSE_TARGET_PANE doesn't seem to work, and we don't want
  // to have to add DOM nodes there too. So instead we add a global click
  // handler to the map that looks for clicked markers if the regular
  // handler doesn't trigger
  GEvent.bindDom(this.parentNode, "click", this, this.handleDomClick);
  GEvent.bind(map, "click", this, this.handleMapClick);  
  
  
  GEvent.bind(map, "dragstart", this, this.beginMapDrag);
  GEvent.bind(map, "dragend", this, this.endMapDrag);
}

QuotesOverlay.prototype.beginMapDrag = function() {
  // Don't count short drags, so that they still trigger marker clicks
  var self = this;
  this.beginDragTimeout = window.setTimeout(function() {
    self.beginDragTimeout = null;
    self.inDrag = true;
  }, 250);
}

QuotesOverlay.prototype.endMapDrag = function() {
  if (this.beginDragTimeout) {
    window.clearTimeout(this.beginDragTimeout);
  } else {
    // We reset the drag state in a timeout because we want the click event
    // (if any) to be processed first
    var self = this;
    window.setTimeout(function() {
      self.inDrag = false;
    }, 0);
  }
}

QuotesOverlay.prototype.handleMapClick = function(marker, point) {
  var self = this;
  this.handledClick = false;
  window.setTimeout(function() {
    if (self.handledClick) return;
    
    var domPoint = map.fromLatLngToDivPixel(point);
    var domBounds = new GBounds([domPoint]);
    
    for (var location in self.visibleQuotes) {
      var quote = self.visibleQuotes[location];
      
      if (quote.getIconNodeBounds().containsBounds(domBounds)) {
        self.handleDomClick({target: quote.getIconNode()});
        break;
      }
    }
  }, 0);
}

QuotesOverlay.prototype.handleDomClick = function(event) {
  this.handledClick = true;
  
  if (this.inDrag) {
    return;
  }
  
  for (var node = event.target; node; node = node.parentNode) {  
    if (node.quoteSet) {
      node.quoteSet.showInfoWindow();
      break;
    }
  }
}

QuotesOverlay.prototype.remove = function() {
  window.console.log("TODO: removing");
}

QuotesOverlay.prototype.copy = function() {
  window.console.log("TODO: copying");
  
  return this;
}

QuotesOverlay.prototype.redraw = function(force) {
  if (force) {
    var zoom = map.getZoom();
    
    if (zoom >= LARGE_ZOOM_THRESHOLD && 
        !hasClass(containerNode, "quotes")) {
      addClass(containerNode, "quotes");
      removeClass(containerNode, "neighborhoods");
    } else if (zoom < LARGE_ZOOM_THRESHOLD && 
               !hasClass(containerNode, "neighborhoods")) {
      removeClass(containerNode, "quotes");
      addClass(containerNode, "neighborhoods");    
    }
    
    this.resetVisibleQuotes();        
  } else {
    if (this.updateVisibleQuotesTimeout) {
      window.clearTimeout(this.updateVisibleQuotesTimeout);
    }
    var self = this;
    this.updateVisibleQuotesTimeout = window.setTimeout(function() {
      self.updateVisibleQuotesTimeout = null;
      self.updateVisibleQuotes();
    }, 100);
  }
}

QuotesOverlay.prototype.resetVisibleQuotes = function() {
  for (var location in this.visibleQuotes) {
    var quote = this.visibleQuotes[location];
    this.parentNode.removeChild(quote.getIconNode());
  }
  
  this.visibleQuotes = {};
  
  this.updateVisibleQuotes();
}

QuotesOverlay.prototype.updateVisibleQuotes = function() {
  var start = new Date().getTime();

  var quotesToRemove = [];
  var quotesToAdd = [];
  var newVisibleQuotes = {};
  var mapBounds = this.map.getBounds();
  
  // Enlarge bounds a bit so points at the edges don't flicker in and out
  var sw = mapBounds.getSouthWest();
  var ne = mapBounds.getNorthEast();
  
  sw = new GLatLng(sw.lat() - 0.001, sw.lng() - 0.001); 
  ne = new GLatLng(ne.lat() + 0.001, ne.lng() + 0.001);
  
  mapBounds = new GLatLngBounds(sw, ne);

  zoom = map.getZoom();
  
  visibleCount = 0;
  for (var i = 0, quoteSet; quoteSet = this.quotes[i]; i++) {
    if (zoom < LARGE_ZOOM_THRESHOLD && 
        quoteSet.quotes.length < POPULAR_THRESHOLD) {
      continue;
    }
    
    var alreadyVisible = quoteSet.location in this.visibleQuotes;
    
    if (mapBounds.contains(quoteSet.getPoint())) {
      visibleCount++;
      newVisibleQuotes[quoteSet.location] = quoteSet;
      if (!alreadyVisible) {
        quotesToAdd.push(quoteSet);
      }
    } else if (alreadyVisible) {
      quotesToRemove.push(quoteSet);
    }
  }
  
  var removeStart = new Date().getTime();
  
  for (var i = 0, quoteSet; quoteSet = quotesToRemove[i]; i++) {
    this.parentNode.removeChild(quoteSet.getIconNode());
  }
  
  this.visibleQuotes = newVisibleQuotes;
  
  var addStart = new Date().getTime();

  for (var i = 0, quoteSet; quoteSet = quotesToAdd[i]; i++) {
    var iconNode = quoteSet.getIconNode();
    var iconPosition = this.map.fromLatLngToDivPixel(quoteSet.getPoint());
    
    iconNode.style.left = iconPosition.x + "px";
    iconNode.style.top = iconPosition.y + "px";
    
    this.parentNode.appendChild(iconNode);
  }
  
  var end = new Date().getTime()
  
  window.console.log(
    "showing " + visibleCount + "/" + quotes.length + 
        " (" + (removeStart - start) + "ms)" +
    " added " + quotesToAdd.length + 
        " (" + (end - addStart) + "ms)" +
    " removed " + quotesToRemove.length +
        " (" + (addStart - removeStart) + "ms)");
}

function NeighborhoodsOverlay(neighborhoods) {
  GOverlay.call(this);
  
  this.map = null;
  this.neighborhoods = neighborhoods;
  
  this.min = this.max = this.neighborhoods[0].outlinePoints[0];
  
  for (var i = 0, n; n = this.neighborhoods[i]; i++) {
    for (var j = 0, p; p = n.outlinePoints[j]; j++) {
      if (p.lat() < this.min.lat()) {
        this.min = new GLatLng(p.lat(), this.min.lng());
      }

      if (p.lat() > this.max.lat()) {
        this.max = new GLatLng(p.lat(), this.max.lng());
      }

      if (p.lng() < this.min.lng()) {
        this.min = new GLatLng(this.min.lat(), p.lng());
      }

      if (p.lng() > this.max.lng()) {
        this.max = new GLatLng(this.max.lat(), p.lng());
      }
    }
  }
}

NeighborhoodsOverlay.prototype.initialize = function(map) {
  this.map = map;
  this.parentNode = map.getPane(G_MAP_MARKER_PANE);
  
  this.canvasNode = newNode("canvas");
  this.parentNode.appendChild(this.canvasNode);
  // we need to init this for IE
  if (typeof G_vmlCanvasManager != "undefined") {
    this.canvasNode = G_vmlCanvasManager.initElement(this.canvasNode);
  }

  for (var i = 0, n; n = this.neighborhoods[i]; i++) {
    markerNode = n.getMarkerNode();
    
    GEvent.bindDom(markerNode, "click", n, n.display);
    
    this.parentNode.appendChild(markerNode);
  }
}

NeighborhoodsOverlay.prototype.remove = function() {
  window.console.log("TODO: removing");
}

NeighborhoodsOverlay.prototype.copy = function() {
  window.console.log("TODO: copying");
  
  return this;
}

NeighborhoodsOverlay.prototype.redraw = function(force) {
  if (!force || map.getZoom() >= LARGE_ZOOM_THRESHOLD) {
    return;
  }
  
  var minInPixels = map.fromLatLngToDivPixel(this.min);
  var maxInPixels = map.fromLatLngToDivPixel(this.max);
  
  var width = maxInPixels.x - minInPixels.x;
  var height = -(maxInPixels.y - minInPixels.y);
  
  var start = new Date().getTime();
   
  this.canvasNode.width = width;
  this.canvasNode.height = height;
  
  this.canvasNode.style.width = width + "px";
  this.canvasNode.style.height = height + "px";
  this.canvasNode.style.top = maxInPixels.y + "px";
  this.canvasNode.style.left = minInPixels.x + "px";
  
  var ctx = this.canvasNode.getContext("2d");
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  var t;
  
  function getCanvasPoint(p) {
    p = map.fromLatLngToDivPixel(p);
    
    p.x -= minInPixels.x;
    p.y -= maxInPixels.y;
    
    return p;
  }
  
  for (var i = 0, n; n = this.neighborhoods[i]; i++) {
    // Update marker node
    var markerNode = n.getMarkerNode();
    var location = map.fromLatLngToDivPixel(n.getPoint());
    
    markerNode.style.left = location.x - markerNode.offsetWidth/2 + "px";
    markerNode.style.top = location.y + "px";
    
    // Redraw outline
    ctx.strokeStyle = n.color;

    // The line width and alpha need to be reset in Safari
    ctx.lineWidth = 5;
    ctx.globalAlpha = 0.5;

    ctx.beginPath();
    t = getCanvasPoint(n.renderPoints[0]);
    ctx.moveTo(t.x, t.y);
    for (var j = 1, p; p = n.renderPoints[j]; j++) {
      t = getCanvasPoint(p);
      ctx.lineTo(t.x, t.y);      
    }
    ctx.stroke();
  }
  
  var end = new Date().getTime();  
  window.console.log("redrew " + width + " x " + height + 
                     " canvas: " + (end - start) + "ms");
}