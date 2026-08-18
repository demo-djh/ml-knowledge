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

    "梯度下降": {
      title: "梯度下降（Gradient Descent）",
      description:
        "一种优化算法，沿着损失函数梯度反方向更新参数，以此最小化模型误差。"
    },
    "批量归一化": {
      title: "批量归一化（Batch Normalization）",
      description:
        "对网络层输入做标准化处理，加速训练收敛，缓解梯度消失问题。"
    },
    
    "正则化": {
      title: "正则化（Regularization）",
      description:
        "向损失函数增加约束项，限制模型复杂度，降低发生过拟合的概率。"
    },

    "梯度消失": {
      title: "梯度消失（Vanishing Gradient）",
      description:
        "深层网络反向传播时梯度不断变小，浅层参数几乎得不到更新，网络难以训练。"
    },

    "梯度爆炸": {
      title: "梯度爆炸（Exploding Gradient）",
      description:
        "反向传播过程中梯度数值急剧变大，参数更新剧烈，模型无法收敛。"
    },

    "随机森林": {
      title: "随机森林（Random Forest）",
      description:
        "集成学习算法，由多棵独立决策树投票输出结果，抗过拟合能力较强。"
    },

    "K近邻": {
      title: "K近邻（K‑Nearest Neighbors）",
      description:
        "无训练过程的惰性算法，依据样本最近邻样本完成分类或回归预测。"
    },

    "交叉验证": {
      title: "交叉验证（Cross Validation）",
      description:
        "将数据集多次切分训练与验证，更可靠评估模型泛化能力。"
    },

    "召回率": {
      title: "召回率（Recall）",
      description:
        "真实正样本中被模型正确识别出来的比例，多用于不平衡数据集评估。"
    },

    "精确率": {
      title: "精确率（Precision）",
      description:
        "模型预测为正的样本里，真正属于正样本的占比。"
    },

    "数据集": {
      title: "数据集（Dataset）",
      description:
        "用于模型训练、验证、测试的全部样本数据集合。"
    },

    "特征工程": {
      title: "特征工程（Feature Engineering）",
      description:
        "对原始数据做提取、转换、筛选，构造有效特征来提升模型效果。"
    },

    "独热编码": {
      title: "独热编码（One‑Hot Encoding）",
      description:
        "把类别型离散特征转换成二进制0‑1向量，供算法计算使用。"
    },

    "标准化": {
      title: "标准化（Standardization）",
      description:
        "将特征缩放为均值为0方差为1，消除不同量纲对算法的影响。"
    },

    "归一化": {
      title: "归一化（Normalization）",
      description:
        "把特征数值映射到固定区间，常见映射范围0到1。"
    },

    "NumPy": {
      title: "NumPy",
      description:
        "Python数值计算库，提供多维数组对象与高效矩阵运算能力。"
    },

    "Pandas": {
      title: "Pandas",
      description:
        "Python数据分析库，用于表格数据读取、清洗、筛选与处理。"
    },

    "张量": {
      title: "张量（Tensor）",
      description:
        "多维数组统称，深度学习框架中用来存储权重、输入输出数据。"
    },

    "回调函数": {
      title: "回调函数（Callback）",
      description:
        "模型训练过程中触发执行的函数，可实现早停、保存模型、记录日志。"
    },

    "早停": {
      title: "早停（Early Stopping）",
      description:
        "验证集性能不再提升时终止训练，防止模型继续训练发生过拟合。"
    },

    "Dropout": {
      title: "Dropout",
      description:
        "训练时随机让部分神经元失效，破坏神经元依赖，作为正则化手段。"
    },

    "反向传播": {
      title: "反向传播（Backpropagation）",
      description:
        "从输出层往输入层逐层计算梯度，更新神经网络权重参数的核心流程。"
    },

    "超参数": {
      title: "超参数（Hyperparameter）",
      description:
        "训练前人工设定的参数，学习率、树深度、batch size都属于超参数。"
    },

    "批次大小": {
      title: "批次大小（Batch Size）",
      description:
        "一次参数更新所使用的样本数量，影响训练速度与内存占用。"
    },

    "学习率": {
      title: "学习率（Learning Rate）",
      description:
        "控制梯度下降每一步参数更新幅度，过大震荡、过小收敛缓慢。"
    },

    "迭代轮次": {
      title: "迭代轮次（Epoch）",
      description:
        "完整遍历全部训练数据集一次，称为一个Epoch。"
    },

    "泛化能力": {
      title: "泛化能力（Generalization）",
      description:
        "模型在从未见过的新样本上的预测表现，衡量模型真实性能。"
    },

    "偏差": {
      title: "偏差（Bias）",
      description:
        "模型预测结果与真实值之间的系统性误差，高偏差往往对应欠拟合。"
    },

    "方差": {
      title: "方差（Variance）",
      description:
        "模型在不同训练集上输出结果的波动程度，高方差往往对应过拟合。"
    },

    "混淆矩阵": {
      title: "混淆矩阵（Confusion Matrix）",
      description:
        "表格形式汇总分类模型预测类别与真实类别，直观查看各类错分情况。"
    },

    "集成学习": {
      title: "集成学习（Ensemble Learning）",
      description:
        "组合多个基础模型共同预测，整体效果优于单个模型。"
    },

    "支持向量机": {
      title: "支持向量机（SVM）",
      description:
        "经典监督学习算法，寻找最优分隔超平面完成分类任务。"
    },

    "聚类": {
      title: "聚类（Clustering）",
      description:
        "无监督学习任务，依据样本相似度自动把样本划分成若干组别。"
    },

    "K均值": {
      title: "K均值（K‑Means）",
      description:
        "最常用无监督聚类算法，将数据划分成预先指定K个簇。"
    },

    "降维": {
      title: "降维（Dimensionality Reduction）",
      description:
        "减少特征数量，保留核心信息，缓解高维数据带来的计算与噪声问题。"
    },

    "主成分分析": {
      title: "主成分分析（PCA）",
      description:
        "经典无监督降维算法，通过线性变换提取数据主要信息成分。"
    },

    "Scikit‑learn": {
      title: "Scikit‑learn",
      description:
        "Python机器学习工具库，封装大量传统机器学习算法与评估工具。"
    },

    "PyTorch": {
      title: "PyTorch",
      description:
        "主流深度学习框架，动态图机制，广泛用于科研与模型开发。"
    },

    "TensorFlow": {
      title: "TensorFlow",
      description:
        "谷歌开源深度学习框架，支持静态图，适合工业部署场景。"
    },

    "迁移学习": {
      title: "迁移学习（Transfer Learning）",
      description:
        "复用预训练模型权重，在小数据集任务上微调得到新模型。"
    },

    "预训练模型": {
      title: "预训练模型（Pretrained Model）",
      description:
        "在大规模通用数据上预先训练完成，可供下游任务复用权重的模型。"
    },

    "微调": {
      title: "微调（Fine‑tuning）",
      description:
        "加载预训练模型，使用目标任务数据继续训练适配新业务场景。"
    },

    "API": {
      title: "API（Application Programming Interface）",
      description:
        "程序对外提供调用的接口，方便别的代码直接使用模型能力。"
    },

    "推理": {
      title: "推理（Inference）",
      description:
        "训练完成的模型接收输入，输出预测结果的运行阶段。"
    },

    "标注数据": {
      title: "标注数据（Labeled Data）",
      description:
        "每条样本附带真实标签，监督学习需要使用这类数据。"
    },

    "无标注数据": {
      title: "无标注数据（Unlabeled Data）",
      description:
        "只有样本特征没有对应标签，多用于无监督学习。"
    },

 
    "多分类": {
      title: "多分类（Multi‑class Classification）",
      description:
        "分类任务类别大于两类，输出结果属于多个类别中的某一类。"
    },
    
    "二分类": {
      title: "二分类（Binary Classification）",
      description:
        "只区分正反两类的分类任务，例如判断是否为垃圾邮件。"
    },
    
    "不平衡数据集": {
      title: "不平衡数据集（Imbalanced Dataset）",
      description:
        "不同类别样本数量差距悬殊，直接训练会偏向样本多的类别。"
    },
        
    "ROC曲线": {
      title: "ROC曲线（Receiver Operating Characteristic）",
      description:
        "以假正率、真正率绘制曲线，用来评估二分类模型整体性能。"
    },
    
    "AUC": {
      title: "AUC（Area Under Curve）",
      description:
        "ROC曲线下面积，数值越接近1，代表模型分类能力越强。"
    },
    
    "混淆矩阵": {
      title: "混淆矩阵（Confusion Matrix）",
      description:
        "表格形式汇总分类模型预测类别与真实类别，直观查看各类错分情况。"
    },
    
    "F1分数": {
      title: "F1分数（F1‑Score）",
      description:
        "精确率与召回率的调和平均数，综合衡量模型分类效果。"
    },
    
    "稀疏矩阵": {
      title: "稀疏矩阵（Sparse Matrix）",
      description:
        "绝大多数元素为0的矩阵，Python中专门存储格式节省内存开销。"
    },
    
    "广播机制": {
      title: "广播机制（Broadcasting）",
      description:
        "NumPy中不同形状数组直接运算，自动做维度扩展完成计算。"
    },
    
    "张量切片": {
      title: "张量切片（Tensor Slicing）",
      description:
        "Python中按索引截取数组、张量部分子数据，用于数据筛选。"
    },
    
    "封装": {
      title: "封装（Encapsulation）",
      description:
        "Python面向对象特性，把数据和处理逻辑打包在类的内部。"
    },
    
    "装饰器": {
      title: "装饰器（Decorator）",
      description:
        "Python语法，不修改原函数代码，给函数增加额外功能。"
    },
    
    "生成器": {
      title: "生成器（Generator）",
      description:
        "Python惰性迭代对象，按需产出数据，处理大数据节省内存。"
    },
    
    "lambda表达式": {
      title: "lambda表达式",
      description:
        "Python匿名简短函数，适合简单逻辑临时传入作为回调参数。"
    },
    
    "闭包": {
      title: "闭包（Closure）",
      description:
        "内部函数记住外部函数变量环境，脱离外部函数仍可访问。"
    },
    
    "序列化": {
      title: "序列化（Serialization）",
      description:
        "把内存对象转为磁盘文件，常用于保存训练好的模型。"
    },
    
    "反序列化": {
      title: "反序列化（Deserialization）",
      description:
        "读取磁盘文件，重建内存对象，用于加载已经保存的模型。"
    },
    
    "管道": {
      title: "管道（Pipeline）",
      description:
        "Scikit‑learn组件，串联数据预处理与模型训练步骤，流程一体化。"
    },
    
    "网格搜索": {
      title: "网格搜索（Grid Search）",
      description:
        "遍历预设超参数组合，交叉验证选出效果最优的一组超参数。"
    },
    
    "随机搜索": {
      title: "随机搜索（Random Search）",
      description:
        "在超参数空间随机采样组合，相比网格搜索效率更高。"
    },
    
    "欠采样": {
      title: "欠采样（Under‑sampling）",
      description:
        "减少数量多类别样本，平衡各类样本数量，处理数据集不平衡。"
    },
    
    "过采样": {
      title: "过采样（Over‑sampling）",
      description:
        "扩充少数类别样本，平衡数据集各类样本数量。"
    },
    
    "SMOTE": {
      title: "SMOTE",
      description:
        "经典过采样算法，合成新少数类样本，改善类别不平衡问题。"
    },
    
    "池化": {
      title: "池化（Pooling）",
      description:
        "卷积神经网络操作，压缩特征图尺寸，降低计算量，提取关键特征。"
    },
    
    "卷积": {
      title: "卷积（Convolution）",
      description:
        "卷积神经网络核心运算，使用卷积核滑动提取图像局部特征。"
    },
    
    "卷积核": {
      title: "卷积核（Kernel）",
      description:
        "卷积运算的权重矩阵，训练中自动学习，用来捕捉边缘纹理等特征。"
    },
    
    "步长": {
      title: "步长（Stride）",
      description:
        "卷积核每次滑动跨越像素格数，步长越大输出特征图尺寸越小。"
    },
    
    "填充": {
      title: "填充（Padding）",
      description:
        "在特征图外围补0，控制输出尺寸，保护边缘信息不丢失。"
    },
    
    "感受野": {
      title: "感受野（Receptive Field）",
      description:
        "输出特征上一个点，对应原始输入上多大范围的区域。"
    },
    
    "循环神经网络": {
      title: "循环神经网络（RNN）",
      description:
        "专门处理序列数据的网络，保存时序历史信息，用于文本时间序列。"
    },
    
    "LSTM": {
      title: "LSTM",
      description:
        "长短期记忆网络，改进RNN，解决长序列梯度消失，擅长文本时序。"
    },
    
    "注意力机制": {
      title: "注意力机制（Attention）",
      description:
        "让模型重点关注输入中关键部分，Transformer模型的核心组件。"
    },
    
    "Transformer": {
      title: "Transformer",
      description:
        "基于自注意力的网络架构，大语言模型、视觉模型的基础骨架。"
    },
    
    "自注意力": {
      title: "自注意力（Self‑Attention）",
      description:
        "序列内部元素互相计算权重，捕捉长距离依赖关系。"
    },
    
    "词嵌入": {
      title: "词嵌入（Word Embedding）",
      description:
        "把文字词语映射为低维稠密向量，向量语义相近代表词语含义相近。"
    },
    
    "token": {
      title: "token",
      description:
        "文本切分后的最小单元，可以是词语、子词或者字符，大模型输入单位。"
    },
    
    "掩码": {
      title: "掩码（Mask）",
      description:
        "特殊标记矩阵，屏蔽部分位置，防止模型看到未来或者padding填充内容。"
    },
    
    "束搜索": {
      title: "束搜索（Beam Search）",
      description:
        "文本生成解码策略，保留多条候选序列，提升生成结果质量。"
    },
    
    "贪婪解码": {
      title: "贪婪解码（Greedy Decoding）",
      description:
        "每一步直接选概率最高token，生成速度快，但容易得到次优结果。"
    },
    
    "量化": {
      title: "量化（Quantization）",
      description:
        "降低模型权重数值精度，压缩模型体积，加速推理部署。"
    },
    "剪枝": {
      title: "剪枝（Pruning）",
      description:
        "删除网络中权重很小的参数，在尽量少损失精度前提下压缩模型。"
    },
    "蒸馏": {
      title: "知识蒸馏（Knowledge Distillation）",
      description:
        "用大模型（教师）指导小模型（学生）学习，实现小模型高性能。"
    },
    "算子": {
      title: "算子（Operator）",
      description:
        "深度学习框架底层计算单元，卷积、矩阵乘法都属于算子。"
    },
    "CUDA": {
      title: "CUDA",
      description:
        "GPU并行计算平台，深度学习借助CUDA实现显卡加速训练推理。"
    },
    "显存": {
      title: "显存（VRAM）",
      description:
        "显卡专用内存，存放张量、模型权重，决定可跑多大模型和批次。"
    },
    "多进程": {
      title: "多进程（Multiprocessing）",
      description:
        "Python多进程库，绕过GIL锁，实现CPU多核并行数据处理。"
    },
    "多线程": {
      title: "多线程（Multithreading）",
      description:
        "同一进程内多个线程，IO密集场景提升程序运行效率。"
    },
    "GIL锁": {
      title: "GIL全局解释器锁",
      description:
        "CPython特性，同一时刻只有一个线程执行Python字节码，限制CPU多线程计算。"
    },
    "上下文管理器": {
      title: "上下文管理器（Context Manager）",
      description:
        "Python with语法背后机制，自动处理资源打开与释放，例如文件句柄。"
    },
    "异常捕获": {
      title: "异常捕获（Try‑Except）",
      description:
        "Python错误处理机制，捕获运行异常，避免程序直接崩溃退出。"
    },
    "断言": {
      title: "断言（Assert）",
      description:
        "调试用语句，检验条件是否成立，不满足则抛出错误，用于代码自检。"
    },
    "生成数据集": {
      title: "Dataset",
      description:
        "PyTorch抽象类，用来封装自定义数据集，定义样本读取逻辑。"
    },
    "数据加载器": {
      title: "DataLoader",
      description:
        "PyTorch组件，完成分批次、打乱、多线程加载Dataset的数据。"
    },
    "数据增强": {
      title: "数据增强（Data Augmentation）",
      description:
        "对原始样本做随机变换扩充数据集，提升模型泛化，如图像翻转裁剪。"
    },
    "噪声": {
      title: "噪声（Noise）",
      description:
        "数据里无关干扰信息，会干扰模型学习真实模式。"
    },
    "离群点": {
      title: "离群点（Outlier）",
      description:
        "明显偏离正常分布的样本，会干扰模型训练效果。"
    },
    "缺失值": {
      title: "缺失值（Missing Value）",
      description:
        "样本部分特征没有采集到有效数据，需要填充或删除处理。"
    },
    "填充": {
      title: "填充（Imputation）",
      description:
        "使用均值、中位数、众数等方式补齐数据集缺失字段。"
    },
    "独热编码": {
      title: "独热编码（One‑Hot Encoding）",
      description:
        "类别特征转为0‑1向量，用于把分类特征喂入算法。"
    },
    "标签编码": {
      title: "标签编码（Label Encoding）",
      description:
        "类别映射为0、1、2整数，多用于标签列，不建议用于特征列。"
    },
    "训练集": {
      title: "训练集（Train Set）",
      description:
        "用来更新模型参数、拟合数据规律的样本集合。"
    },
    "验证集": {
      title: "验证集（Validation Set）",
      description:
        "训练过程中调超参、监控过拟合，不参与参数更新的数据集。"
    },
    "测试集": {
      title: "测试集（Test Set）",
      description:
        "训练全程不触碰，最后一次性评估模型真实泛化性能。"
    },
    "基准模型": {
      title: "基准模型（Baseline）",
      description:
        "简单基础模型，作为效果参照物，用来对比新模型是否有提升。"
    },
    "消融实验": {
      title: "消融实验（Ablation Study）",
      description:
        "移除模型某模块，对比性能，验证该模块带来的实际增益。"
    },
    "蒸馏": {
      title: "知识蒸馏（Knowledge Distillation）",
      description:
        "大模型作为教师，训练小模型，小模型继承大模型知识。"
    },
    "提示词工程": {
      title: "提示词工程（Prompt Engineering）",
      description:
        "设计输入提示文本，引导大模型输出符合预期的结果。"
    },
    "少样本学习": {
      title: "少样本学习（Few‑shot Learning）",
      description:
        "仅提供少量示例样本，模型就完成新任务。"
    },
    "零样本学习": {
      title: "零样本学习（Zero‑shot Learning）",
      description:
        "不给任务样本，仅凭描述，模型直接完成陌生任务。"
    },
    "RAG检索增强生成": {
      title: "RAG检索增强生成",
      description:
        "先检索外部知识库片段，再交给大模型生成回答，弥补模型知识局限。"
    },
    "向量数据库": {
      title: "向量数据库（Vector Database）",
      description:
        "专门存储文本向量，支持快速相似度检索，RAG系统常用组件。"
    },
    "嵌入向量": {
      title: "嵌入向量（Embedding Vector）",
      description:
        "文本、图片转为稠密数值向量，语义相近向量距离更近。"
    },
    "余弦相似度": {
      title: "余弦相似度（Cosine Similarity）",
      description:
        "衡量两个向量方向相似度，数值越高代表语义越接近。"
    },
    "欧氏距离": {
      title: "欧氏距离（Euclidean Distance）",
      description:
        "空间两点之间直线距离，用来衡量向量之间差异大小。"
    }
    
    
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
