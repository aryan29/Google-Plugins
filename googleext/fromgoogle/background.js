chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' green!');
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="green",document.body.style.color="white"'
  });
});