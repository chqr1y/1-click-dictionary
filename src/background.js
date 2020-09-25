chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.local.set({
    width: 500,
    height: 500,
    autoSubmit: true
  });
});
