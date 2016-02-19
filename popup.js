window.addEventListener('load', function(e) {
  document.getElementById('save').addEventListener('click', printTotal);
});

var getDom = function() {
  chrome.tabs.executeScript(null, {
    file: "content.js"
  });
};

var printTotal = function() {
  document.getElementById('total').innerHTML = getText;
};
