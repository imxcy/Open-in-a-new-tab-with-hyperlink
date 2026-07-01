chrome.storage.local.get({ enabled: true }, function (item) {
  if (item.enabled) {
    chrome.action.setIcon({ path: { 48: "icon48.png", 128: "icon128.png" } });
  } else {
    chrome.action.setIcon({ path: { 48: "icon48_off.png", 128: "icon128_off.png" } });
  }
});

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.local.set({ enabled: true });
});
