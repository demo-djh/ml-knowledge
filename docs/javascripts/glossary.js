(function () {
  "use strict";

  /*
   * =======================================================
   * 名词解释词典
   *
   * 以后只需要在这里增加名词即可。
   * =======================================================
   */
  const GLOSSARY = {
    "机器学习": {
      title: "机器学习（Machine Learning）",
      description:
        "一种让计算机从数据中学习规律，并利用学习到的规律对新数据进行预测或决策的方法。"
    },
    
    "数据": {
      title: "数据（Data）",
      description:
        "用来训练和测试计算机的信息，通常包含特征和标签。"
    },

    "特征": {
      title: "特征（Feature）",
      description:
        "用来描述数据的输入变量或属性。"
    },

    "标签": {
      title: "标签（Label）",
      description:
        "模型想要预测的真实结果或输出答案。"
    },

    "模型": {
      title: "模型（Model）",
      description:
        "通过算法对数据进行学习后得到的程序，能对新数据做出预测。"
    },

    "标签": {
      title: "权重（Weight）",
      description:
        "模型中用于调整特征重要程度的参数。"
    },

    "线性回归": {
      title: "线性回归（Linear Regression）",
      description:
        "用于预测连续数值的简单监督学习算法。"
    },
    
    "逻辑回归": {
      title: "逻辑回归（Logistic Regression）",
      description:
        "用于处理分类问题的基础算法。"
    },
    
    "神经网络": {
      title: "神经网络（Neural Network）",
      description:
        "模仿人脑结构的多层计算模型，是深度学习的基础。"
    },
    
    "决策树": {
      title: "决策树（Decision Tree）",
      description:
        "通过树状分支结构进行分类和预测的算法。"
    },
    
    "生成对抗网络": {
      title: "生成对抗网络（GAN）",
      description:
        "由生成器和判别器组成、通过互相博弈来生成逼真数据的模型。"
    },
    
    "过拟合": {
      title: "过拟合（Overfitting）",
      description:
        "模型在训练集上表现极好，但在新数据上表现很差。"
    },
    
    "欠拟合": {
      title: "欠拟合（Underfitting）",
      description:
        "模型过于简单，连训练集的规律都没能学会。"
    },
    
    "损失函数": {
      title: "损失函数（Loss Function）",
      description:
        "用来衡量模型预测值和真实值差距的数学公式。"
    },
    
    "激活函数": {
      title: "激活函数（Activation Function）",
      description:
        "给神经元引入非线性能力的关键函数，如 ReLU、Sigmoid。"
    },
    
    "准确率": {
      title: "准确率（Accuracy）",
      description:
        "分类正确的样本数占总样本数的比例。"
    },
    
    
  };


  /* =======================================================
     基础配置
     ======================================================= */

  const GLOSSARY_CLASS = "glossary-term";
  const TOOLTIP_ID = "glossary-tooltip";


  /* =======================================================
     正则表达式转义
     ======================================================= */

  function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }


  /* =======================================================
     获取所有术语
     长词优先匹配，避免出现嵌套匹配问题
     ======================================================= */

  function getTerms() {
    return Object.keys(GLOSSARY).sort(function (a, b) {
      return b.length - a.length;
    });
  }


  /* =======================================================
     判断当前文本是否应该跳过
     ======================================================= */

  function isExcluded(node) {
    const parent = node.parentElement;

    if (!parent) {
      return true;
    }

    return Boolean(
      parent.closest(
        "a, button, code, pre, .glossary-term, .md-footnote, .headerlink"
      )
    );
  }


  /* =======================================================
     显示解释卡片
     ======================================================= */

  function showTooltip(term, element) {
    let tooltip = document.getElementById(TOOLTIP_ID);

    if (!tooltip) {
      tooltip = document.createElement("div");

      tooltip.id = TOOLTIP_ID;

      tooltip.setAttribute("role", "tooltip");

      document.body.appendChild(tooltip);
    }

    const entry = GLOSSARY[term];

    tooltip.innerHTML =
      '<div class="glossary-tooltip-title">' +
      entry.title +
      "</div>" +
      '<div class="glossary-tooltip-description">' +
      entry.description +
      "</div>";

    tooltip.classList.add("is-visible");

    const rect = element.getBoundingClientRect();

    const margin = 12;

    const tooltipRect = tooltip.getBoundingClientRect();

    let left =
      rect.left +
      rect.width / 2 -
      tooltipRect.width / 2;

    let top = rect.bottom + margin;


    /* 防止超出屏幕左侧 */

    if (left < margin) {
      left = margin;
    }


    /* 防止超出屏幕右侧 */

    if (
      left + tooltipRect.width >
      window.innerWidth - margin
    ) {
      left =
        window.innerWidth -
        tooltipRect.width -
        margin;
    }


    /* 如果下面空间不足，就显示在文字上方 */

    if (
      top + tooltipRect.height >
      window.innerHeight - margin
    ) {
      top =
        rect.top -
        tooltipRect.height -
        margin;
    }


    tooltip.style.left = left + "px";

    tooltip.style.top = top + "px";
  }


  /* =======================================================
     隐藏解释卡片
     ======================================================= */

  function hideTooltip() {
    const tooltip =
      document.getElementById(TOOLTIP_ID);

    if (tooltip) {
      tooltip.classList.remove("is-visible");
    }
  }


  /* =======================================================
     给术语绑定交互
     ======================================================= */

  function bindTerm(element, term) {
    element.className = GLOSSARY_CLASS;

    element.dataset.glossaryTerm = term;

    element.setAttribute("tabindex", "0");

    element.setAttribute(
      "aria-label",
      GLOSSARY[term].title +
        "：点击查看解释"
    );


    /* 鼠标悬停 */

    element.addEventListener(
      "mouseenter",
      function () {
        showTooltip(term, element);
      }
    );


    /* 鼠标离开 */

    element.addEventListener(
      "mouseleave",
      hideTooltip
    );


    /* 键盘访问 */

    element.addEventListener(
      "focus",
      function () {
        showTooltip(term, element);
      }
    );


    element.addEventListener(
      "blur",
      hideTooltip
    );


    /* 点击 */

    element.addEventListener(
      "click",
      function (event) {
        event.stopPropagation();

        showTooltip(term, element);
      }
    );
  }


  /* =======================================================
     处理文本节点
     ======================================================= */

  function processTextNode(textNode, regex) {
    if (isExcluded(textNode)) {
      return;
    }

    const text = textNode.nodeValue;

    if (!text || !regex.test(text)) {
      return;
    }

    regex.lastIndex = 0;

    const fragment =
      document.createDocumentFragment();

    let lastIndex = 0;

    let match;


    while ((match = regex.exec(text)) !== null) {

      /* 添加术语之前的普通文本 */

      if (match.index > lastIndex) {
        fragment.appendChild(
          document.createTextNode(
            text.slice(
              lastIndex,
              match.index
            )
          )
        );
      }


      /* 创建术语 */

      const term = match[0];

      const span =
        document.createElement("span");

      span.textContent = term;

      bindTerm(span, term);

      fragment.appendChild(span);


      lastIndex =
        match.index + term.length;
    }


    /* 添加剩余文本 */

    if (lastIndex < text.length) {
      fragment.appendChild(
        document.createTextNode(
          text.slice(lastIndex)
        )
      );
    }


    textNode.parentNode.replaceChild(
      fragment,
      textNode
    );
  }


  /* =======================================================
     扫描正文
     ======================================================= */

  function applyGlossary() {

    const content =
      document.querySelector(
        ".md-content__inner"
      );

    if (!content) {
      return;
    }


    const terms = getTerms();

    if (!terms.length) {
      return;
    }


    const regex =
      new RegExp(
        terms
          .map(escapeRegExp)
          .join("|"),
        "g"
      );


    const walker =
      document.createTreeWalker(
        content,
        NodeFilter.SHOW_TEXT
      );


    const nodes = [];

    let node;


    while (
      (node = walker.nextNode())
    ) {
      nodes.push(node);
    }


    nodes.forEach(function (textNode) {
      processTextNode(
        textNode,
        regex
      );
    });
  }


  /* =======================================================
     初始化
     ======================================================= */

  function init() {

    applyGlossary();


    /*
     * 点击页面其他地方时关闭解释框
     */

    document.addEventListener(
      "click",
      function (event) {

        if (
          !event.target.closest(
            "." + GLOSSARY_CLASS
          )
        ) {
          hideTooltip();
        }

      }
    );
  }


  /* =======================================================
     MkDocs Material Instant Navigation
     ======================================================= */

  if (
    window.document$ &&
    typeof window.document$.subscribe ===
      "function"
  ) {

    window.document$.subscribe(
      function () {

        window.setTimeout(
          applyGlossary,
          0
        );

      }
    );
  }


  /* =======================================================
     页面加载
     ======================================================= */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      init
    );

  } else {

    init();

  }

})();
