document.addEventListener("click", function (e) {
  // 忽略中键和右键（浏览器已有默认行为），只处理左键单击
  if (e.button !== 0) return;

  // Ctrl/Cmd+click 已由浏览器默认在新标签打开，无需干预
  if (e.ctrlKey || e.metaKey) return;

  // 向上查找最近的 <a> 元素，支持点击链接内部子元素
  var link = e.target.closest("a");
  if (!link) return;

  var href = link.getAttribute("href");
  if (!href) return;

  // 跳过非导航型链接：空锚点、页内锚点、JS伪协议、下载链接
  if (href.charAt(0) === "#") return;
  if (/^(javascript|mailto|tel):/i.test(href)) return;
  if (link.hasAttribute("download")) return;
  if (link.target === "_blank") return;

  // 阻止默认导航，改在新标签页打开
  e.preventDefault();
  e.stopPropagation();

  var url = link.href; // 浏览器解析后的完整 URL
  if (url) {
    window.open(url, "_blank");
  }
}, true);
