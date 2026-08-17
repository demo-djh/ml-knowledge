(function () {
  "use strict";

  /* =======================================================
     1. 创建时间水印
     ======================================================= */

  function createWatermark() {

    /*
     * 如果已经存在水印，则不重复创建。
     */
    let watermark = document.getElementById("time-watermark");

    if (watermark) {
      return watermark;
    }

    watermark = document.createElement("div");

    watermark.id = "time-watermark";

    /*
     * 创建多个水印文字。
     *
     * 4 × 8 = 32 个水印。
     */
    for (let i = 0; i < 32; i++) {

      const item = document.createElement("span");

      item.className = "time-watermark-item";

      item.textContent = getCurrentTime();

      watermark.appendChild(item);
    }

    document.body.appendChild(watermark);

    return watermark;
  }


  /* =======================================================
     2. 获取当前时间
     ======================================================= */

  function getCurrentTime() {

    const now = new Date();

    const year = now.getFullYear();

    const month = String(
      now.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
      now.getDate()
    ).padStart(2, "0");

    const hours = String(
      now.getHours()
    ).padStart(2, "0");

    const minutes = String(
      now.getMinutes()
    ).padStart(2, "0");

    const seconds = String(
      now.getSeconds()
    ).padStart(2, "0");


    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }


  /* =======================================================
     3. 更新所有水印
     ======================================================= */

  function updateWatermark() {

    const watermark =
      document.getElementById("time-watermark");

    if (!watermark) {
      return;
    }

    const currentTime =
      getCurrentTime();

    const items =
      watermark.querySelectorAll(
        ".time-watermark-item"
      );

    items.forEach(function (item) {
      item.textContent = currentTime;
    });
  }


  /* =======================================================
     4. 禁止右键
     ======================================================= */

  document.addEventListener(
    "contextmenu",
    function (event) {

      event.preventDefault();

    },
    false
  );


  /* =======================================================
     5. 禁止复制
     ======================================================= */

  document.addEventListener(
    "copy",
    function (event) {

      event.preventDefault();

    },
    false
  );


  /* =======================================================
     6. 禁止剪切
     ======================================================= */

  document.addEventListener(
    "cut",
    function (event) {

      event.preventDefault();

    },
    false
  );


  /* =======================================================
     7. 禁止常见快捷键
     ======================================================= */

  document.addEventListener(
    "keydown",
    function (event) {

      const key =
        event.key.toLowerCase();

      const modifier =
        event.ctrlKey ||
        event.metaKey;


      if (
        modifier &&
        (
          key === "c" ||
          key === "x" ||
          key === "u" ||
          key === "s"
        )
      ) {

        event.preventDefault();

      }

    },
    false
  );


  /* =======================================================
     8. 初始化
     ======================================================= */

  function init() {

    createWatermark();

    updateWatermark();

    /*
     * 每秒更新一次时间。
     */
    setInterval(
      updateWatermark,
      1000
    );

  }


  /* =======================================================
     9. 页面加载
     ======================================================= */

  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      init
    );

  } else {

    init();

  }

})();
