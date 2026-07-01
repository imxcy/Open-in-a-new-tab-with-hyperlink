var toggle = document.getElementById("toggle");
var status = document.getElementById("status");

function updateUI(enabled) {
  toggle.checked = enabled;
  status.textContent = enabled ? "已开启" : "已关闭";
}

chrome.storage.local.get({ enabled: true }, function (item) {
  updateUI(item.enabled);
});

toggle.addEventListener("change", function () {
  var enabled = toggle.checked;
  chrome.storage.local.set({ enabled: enabled });
  updateUI(enabled);

  var iconPath = enabled
    ? { 48: "icon48.png", 128: "icon128.png" }
    : { 48: "icon48_off.png", 128: "icon128_off.png" };
  chrome.action.setIcon({ path: iconPath });
});
