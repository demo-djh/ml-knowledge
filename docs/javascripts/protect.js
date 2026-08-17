/* ==========================================================================
   protect.js
   禁用正文选中 / 复制 / 右键菜单 / Ctrl+C 等常见拷贝方式。
   放在 docs/javascripts/protect.js，并在 mkdocs.yml 的 extra_javascript 中引入。

   诚实提醒：这些都是纯前端手段，只能拦住"随手复制"这类低成本行为，
   拦不住会查看网页源码 / 用浏览器开发者工具 / 直接访问 Markdown 源文件的人。
   如果你的知识库内容确实敏感，需要做访问控制的话，前端水印+禁止复制只能
   作为"降低随手泄露"的辅助手段，不能替代权限系统。
   ========================================================================== */

(function () {
  "use strict";

  function protect(root) {
    root.addEventListener("copy", function (e) { e.preventDefault(); });
    root.addEventListener("cut", function (e) { e.preventDefault(); });
    root.addEventListener("contextmenu", function (e) { e.preventDefault(); });
    root.addEventListener("dragstart", function (e) { e.preventDefault(); });

    root.addEventListener("keydown", function (e) {
      var k = e.key ? e.key.toLowerCase() : "";
      var ctrlOrCmd = e.ctrlKey || e.metaKey;
      // 拦截 Ctrl/Cmd + C / X / A / S / P
      if (ctrlOrCmd && ["c", "x", "a", "s", "p"].indexOf(k) !== -1) {
        e.preventDefault();
      }
    });
  }

  function applyStyle() {
    var style = document.createElement("style");
    style.textContent =
      ".md-content, .md-content * {" +
      "  -webkit-user-select: none;" +
      "  -moz-user-select: none;" +
      "  user-select: none;" +
      "}" +
      /* 代码块允许选中，方便用户复制命令；如不需要可删掉这条 */
      ".md-content pre, .md-content pre * {" +
      "  -webkit-user-select: text;" +
      "  -moz-user-select: text;" +
      "  user-select: text;" +
      "}";
    document.head.appendChild(style);
  }

  function init() {
    applyStyle();
    var content = document.querySelector(".md-content") || document.body;
    protect(content);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  if (window.document$) {
    window.document$.subscribe(init);
  }
})();
