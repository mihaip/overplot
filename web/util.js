// If FireBug/Safari isn't running
if (!window.console) window.console = {log: function(x) {}};

function newNode(tagName) {
  return document.createElement(tagName);
}

function getNode(id) {
  return document.getElementById(id);
}

function agentHas(s) {
  return navigator.userAgent.toLowerCase().indexOf(s) != -1
}

function isSafari() {
  return agentHas("safari");
}

function isGecko() {
  return agentHas("gecko") && !isSafari()
}

function isMsie() {
  return agentHas("msie") && !window.opera;
}

function hasClass(node, className) {
  return className in getClassMap(node);
}

function addClass(node, className) {
  if (hasClass(node, className)) return;
  
  node.className += " " + className;
}

function removeClass(node, className) {
  var classMap = getClassMap(node);

  if (!(className in classMap)) return;
  
  delete classMap[className];
  var newClassList = [];
  
  for (var className in classMap) {
    newClassList.push(className);
  }
  
  node.className = newClassList.join(" ");
}

function getClassMap(node) {
  var classMap = {};
  var classNames = node.className.split(/\s+/);
  
  for (var i = 0; i < classNames.length; i++) {
    classMap[classNames[i]] = true;
  }
  
  return classMap;
}

var tokenCache = {};

function tokenize(s) {
  if (!(s in tokenCache)) {
    var tokens = s.toLowerCase().split(/[ !.]+/);
    var tokenMap = {};
    
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      
      token = token.replace(/[^A-Za-z0-9]+/g, "");
      tokenMap[token] = true;
    }
    
    tokenCache[s] = tokenMap;
  }
  
  return tokenCache[s];
}

var tokenizationQueue = [];
var tokenizationTimeout = null;

function addToTokenCache(s) {
  tokenizationQueue.push(s);
  
  if (!tokenizationTimeout) {
    tokenizationTimeout = window.setTimeout(function() {
      for (var i = 0; i < tokenizationQueue.length; i++) {
        tokenize(tokenizationQueue[i]);
      }
      
      tokenizationQueue = [];
      tokenizationTimeout = null;
    }, 5000);
  }
}