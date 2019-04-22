chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  chrome.tabs.executeScript({
    code: 'title = document.title + " - " + window.location.hostname; if (document.title.indexOf(window.location.hostname) == -1) {document.title = title;}'
  });
});