/* ==========================================================================
   watermark.js
   在每个页面铺满一层「访问者 IP + 当前时间」水印，用于防止内容被截图/复制后
   无法追溯来源。放在 docs/javascripts/watermark.js，并在 mkdocs.yml 的
   extra_javascript 中引入。

   说明与限制（请如实告知知识库的使用者）：
   - 浏览器端 JS 无法直接获取访问者的真实公网 IP，这里通过公开的
     https://api.ipify.org 接口查询「客户端出口 IP」；如果对方网络屏蔽了该
     接口，或希望更严谨，建议换成你自己后端 / Cloudflare Worker 返回的 IP，
     准确度和可控性都更高。
   - 这是「显性水印」，用来提高截图/偷拍外泄内容时的可追溯成本，
     并不能阻止有心人用浏览器保存网页、复制 HTML 源码等方式绕过。
     如果需要更强的防护，需要配合后端鉴权 + 访问日志，而不是纯前端方案。
   ========================================================================== */

(function () {
  "use strict";

  var WATERMARK_ID = "kb-watermark-overlay";
  var IP_CACHE_KEY = "kb_watermark_ip";
  var IP_CACHE_TTL = 5 * 60 * 1000; // 5 分钟重新获取一次 IP
  var currentIP = "获取中...";

  function formatTime(d) {
    function pad(n) { return n < 10 ? "0" + n : "" + n; }
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()) +
      " " + pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds());
  }

  function buildTileDataURL(text) {
    var canvas = document.createElement("canvas");
    var size = 320;
    canvas.width = size;
    canvas.height = size;
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, size, size);
    ctx.translate(size / 2, size / 2);
    ctx.rotate((-18 * Math.PI) / 180);
    ctx.font = "13px -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif";
    ctx.fillStyle = "rgba(43, 42, 39, 0.14)"; // 与配色方案里的深棕文字一致，低透明度
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    var lines = text.split("\n");
    lines.forEach(function (line, i) {
      ctx.fillText(line, 0, (i - (lines.length - 1) / 2) * 18);
    });
    return canvas.toDataURL("image/png");
  }

  function ensureOverlay() {
    var el = document.getElementById(WATERMARK_ID);
    if (!el) {
      el = document.createElement("div");
      el.id = WATERMARK_ID;
      el.style.position = "fixed";
      el.style.top = "0";
      el.style.left = "0";
      el.style.width = "100vw";
      el.style.height = "100vh";
      el.style.pointerEvents = "none";
      el.style.zIndex = "2147483647";
      el.style.mixBlendMode = "multiply";
      document.body.appendChild(el);

      // 简单的防删除：如果水印节点被移除，自动重新插入
      var observer = new MutationObserver(function () {
        if (!document.getElementById(WATERMARK_ID)) {
          document.body.appendChild(el);
        }
      });
      observer.observe(document.body, { childList: true });
    }
    return el;
  }

  function renderWatermark() {
    var overlay = ensureOverlay();
    var text = "IP: " + currentIP + "\n" + formatTime(new Date());
    var url = buildTileDataURL(text);
    overlay.style.backgroundImage = "url(" + url + ")";
    overlay.style.backgroundRepeat = "repeat";
  }

  function fetchIP() {
    var cached = null;
    try {
      cached = JSON.parse(sessionStorage.getItem(IP_CACHE_KEY) || "null");
    } catch (e) { /* ignore */ }

    if (cached && Date.now() - cached.ts < IP_CACHE_TTL) {
      currentIP = cached.ip;
      renderWatermark();
      return;
    }

    fetch("https://api.ipify.org?format=json")
      .then(function (res) { return res.json(); })
      .then(function (data) {
        currentIP = data.ip || "未知";
        try {
          sessionStorage.setItem(IP_CACHE_KEY, JSON.stringify({ ip: currentIP, ts: Date.now() }));
        } catch (e) { /* ignore */ }
        renderWatermark();
      })
      .catch(function () {
        currentIP = "未知";
        renderWatermark();
      });
  }

  function init() {
    fetchIP();
    // 时间每秒刷新一次
    setInterval(renderWatermark, 1000);
    // IP 定期重新校验
    setInterval(fetchIP, IP_CACHE_TTL);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // mkdocs-material 使用 instant loading 时页面是局部替换的，
  // 需要在每次页面切换后重新挂载水印
  if (window.document$) {
    window.document$.subscribe(function () {
      ensureOverlay();
      renderWatermark();
    });
  }
})();
