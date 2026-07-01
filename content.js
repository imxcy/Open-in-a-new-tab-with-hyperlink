var enabled = true;
chrome.storage.local.get({ enabled: true }, function (item) {
  enabled = item.enabled;
});

chrome.storage.onChanged.addListener(function (changes) {
  if (changes.enabled) {
    enabled = changes.enabled.newValue;
  }
});

document.addEventListener("click", function (e) {
  if (!enabled) return;

  if (e.button !== 0) return;
  if (e.ctrlKey || e.metaKey) return;

  var link = e.target.closest("a");
  if (!link) return;

  var href = link.getAttribute("href");
  if (!href) return;

  if (href.charAt(0) === "#") return;
  if (/^(javascript|mailto|tel):/i.test(href)) return;
  if (link.hasAttribute("download")) return;
  if (link.target === "_blank") return;

  e.preventDefault();
  e.stopPropagation();

  var url = link.href;
  if (url) {
    window.open(url, "_blank");
  }
}, true);
