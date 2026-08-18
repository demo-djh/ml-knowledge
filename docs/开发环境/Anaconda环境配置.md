# Anaconda 环境配置

> 本章详解 Anaconda 的安装、虚拟环境创建与管理、第三方库安装、镜像源配置等实操内容，解决机器学习多库版本兼容、环境混乱等难题。

## 一、为什么需要 Anaconda

直接用系统 Python 安装各种库，时间久了会遇到这些问题：

- **版本冲突**：项目 A 需要 NumPy 1.20，项目 B 需要 NumPy 1.24，装哪个？
- **环境混乱**：库越装越多，互相依赖关系复杂，容易出问题
- **重装麻烦**：换电脑或系统崩溃后，重新配置环境耗时耗力

**Anaconda** 是一个 Python 数据科学平台，核心优势是：

1. **虚拟环境管理**：每个项目一个独立环境，互不干扰
2. **预装数据科学库**：自带 NumPy、Pandas、scikit-learn 等 1500+ 常用库
3. **跨平台一致**：Windows/macOS/Linux 上环境完全一致
4. **conda 包管理**：比 pip 更擅长处理复杂的依赖关系和非 Python 依赖

> 简单理解：Anaconda = Python + 常用数据科学库 + 环境管理工具 + 包管理工具

### Anaconda vs Miniconda

| 对比项 | Anaconda | Miniconda |
|--------|----------|-----------|
| 体积 | 约 3GB（预装大量库） | 约 100MB（仅基础环境） |
| 适合 | 不想逐个装库的新手 | 希望精简、按需安装的用户 |
| 功能 | 完整 | 相同（可手动安装需要的库） |

**新手推荐 Anaconda**，开箱即用。

## 二、下载与安装

### 2.1 下载

- 官网：[https://www.anaconda.com/download](https://www.anaconda.com/download)
- 国内镜像（推荐，速度快）：
  - 清华大学：[https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/](https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/)
  - 华为云：[https://mirrors.huaweicloud.com/anaconda/archive/](https://mirrors.huaweicloud.com/anaconda/archive/)

选择对应操作系统的最新版本安装包下载。

### 2.2 Windows 安装

1. 双击 `.exe` 安装包
2. 点击 "Next" → "I Agree"
3. 选择 "Just Me"（仅当前用户），点击 Next
4. 选择安装路径（建议默认，或选一个不含中文和空格的路径）
5. **关键选项**：
   - 勾选 "Register Anaconda3 as my default Python"（注册为默认 Python）
   - 不建议勾选 "Add Anaconda3 to my PATH environment variable"（官方不推荐，避免冲突）
6. 点击 "Install"，等待安装完成
7. 安装完成后，从开始菜单打开 "Anaconda Prompt" 使用

### 2.3 macOS 安装

1. 双击 `.pkg` 安装包，按向导安装
2. 安装完成后，打开终端，输入 `conda --version` 验证

### 2.4 Linux 安装

```bash
# 下载安装脚本（以清华镜像为例，替换为实际文件名）
wget https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/Anaconda3-2024.02-1-Linux-x86_64.sh

# 运行安装脚本
bash Anaconda3-2024.02-1-Linux-x86_64.sh

# 按提示操作，同意协议，选择安装路径
# 安装完成后重启终端，或执行 source ~/.bashrc
```

### 2.5 验证安装

打开 Anaconda Prompt（Windows）或终端（macOS/Linux），输入：

```bash
conda --version
# 输出类似：conda 24.1.2

python --version
# 输出类似：Python 3.11.7
```

## 三、conda 虚拟环境管理

虚拟环境是 Anaconda 的核心功能。每个环境是独立的 Python 解释器 + 独立的库集合。

### 3.1 创建环境

```bash
# 创建名为 ml_env 的环境，指定 Python 版本
conda create --name ml_env python=3.11

# 创建时同时安装一些库
conda create --name ml_env python=3.11 numpy pandas scikit-learn

# 简写（--name 可缩写为 -n）
conda create -n ml_env python=3.11
```

> 建议为每个机器学习项目创建独立环境，环境名简洁明了，如 `ml_basic`、`dl_project` 等。

### 3.2 激活与退出环境

```bash
# 激活环境（Windows 和 macOS/Linux 命令相同）
conda activate ml_env

# 退出环境，回到 base 环境
conda deactivate
```

激活后，命令行提示符前会显示环境名，如 `(ml_env) user@computer:~$`。

### 3.3 查看环境

```bash
# 列出所有环境（* 标记当前激活的环境）
conda env list

# 查看当前环境中安装的包
conda list

# 查看指定环境中的包
conda list -n ml_env
```

### 3.4 删除环境

```bash
# 删除名为 ml_env 的环境（需先退出该环境）
conda remove -n ml_env --all

# 或
conda env remove -n ml_env
```

### 3.5 复制环境

```bash
# 基于现有环境创建副本
conda create --name ml_env_copy --clone ml_env
```

### 3.6 环境导出与分享

```bash
# 导出环境配置到文件
conda env export > environment.yml

# 从文件创建环境（在另一台电脑上）
conda env create -f environment.yml
```

`environment.yml` 文件内容示例：

```yaml
name: ml_env
channels:
  - defaults
dependencies:
  - python=3.11
  - numpy=1.26
  - pandas=2.1
  - scikit-learn=1.3
  - pip:
    - some-pip-only-package
```

## 四、包管理

### 4.1 安装包

```bash
# 在当前激活环境中安装
conda install numpy

# 安装指定版本
conda install numpy=1.26.0

# 同时安装多个包
conda install numpy pandas matplotlib

# 安装到指定环境（无需激活）
conda install -n ml_env numpy

# 从指定 channel 安装
conda install -c conda-forge xgboost
```

### 4.2 conda 与 pip 的关系

在 Anaconda 环境中，conda 和 pip 都可以使用：

| 对比 | conda | pip |
|------|-------|-----|
| 管理范围 | Python 包 + 非 Python 依赖 | 仅 Python 包 |
| 依赖解析 | 更强大，处理复杂依赖 | 较快，但可能冲突 |
| 源 | Anaconda repo / conda-forge | PyPI |
| 适用 | 数据科学核心库 | conda 没有的包 |

**使用原则：**
1. 优先用 `conda install` 安装
2. conda 找不到的包，再用 `pip install`
3. 尽量不要混用导致依赖混乱

```bash
# 在 conda 环境中使用 pip（确保 pip 是当前环境的）
conda activate ml_env
pip install some-package
```

### 4.3 更新与卸载

```bash
# 更新包
conda update numpy

# 更新所有包
conda update --all

# 更新 conda 自身
conda update conda

# 卸载包
conda remove numpy

# 卸载指定环境中的包
conda remove -n ml_env numpy
```

### 4.4 搜索包

```bash
# 搜索可用的包
conda search numpy

# 查看包信息
conda info numpy
```

## 五、配置国内镜像源

默认 conda 从国外服务器下载，速度较慢。配置国内镜像可大幅提升下载速度。

### 5.1 清华镜像源

在终端中执行以下命令添加清华镜像：

```bash
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
conda config --set show_channel_urls yes
```

### 5.2 查看与恢复

```bash
# 查看当前配置
conda config --show channels

# 恢复默认源（删除所有自定义源）
conda config --remove-key channels
```

### 5.3 直接编辑配置文件

也可以直接编辑 `~/.condarc` 文件（macOS/Linux）或 `C:\Users\用户名\.condarc`（Windows）：

```yaml
channels:
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
  - defaults
show_channel_urls: true
```

## 六、机器学习常用环境搭建示例

以下是一个典型的机器学习开发环境搭建流程：

```bash
# 1. 创建环境
conda create -n ml_basic python=3.11
conda activate ml_basic

# 2. 安装核心数据处理库
conda install numpy pandas scipy

# 3. 安装可视化库
conda install matplotlib seaborn

# 4. 安装机器学习库
conda install scikit-learn

# 5. 安装 Jupyter
conda install jupyterlab

# 6. 安装其他需要的库（conda 没有的用 pip）
pip install xgboost lightgbm

# 7. 验证
python -c "import numpy, pandas, sklearn; print('环境配置成功！')"
```

## 七、常见问题

**Q：conda 命令找不到（command not found）？**
A：Windows 用户使用 "Anaconda Prompt" 而非普通 cmd；macOS/Linux 用户需确保初始化脚本已写入 `~/.bashrc` 或 `~/.zshrc`，可运行 `conda init` 修复。

**Q：安装包时速度很慢或超时？**
A：配置国内镜像源（见第五节），或使用 `conda install -c conda-forge 包名` 从 conda-forge 安装。

**Q：Solving environment 一直转圈？**
A：conda 解析依赖有时较慢。可以：① 耐心等待；② 使用 `conda install --freeze-installed 包名` 跳过已安装包的检查；③ 改用 mamba（更快的 conda 替代）。

**Q：如何清理占用的磁盘空间？**
A：运行 `conda clean -a` 清理缓存和未使用的包。

**Q：base 环境要不要装东西？**
A：不建议在 base 环境中安装项目相关的库。base 仅保留 conda 自身和基础工具，所有项目使用独立环境。

**Q：如何查看环境占用的磁盘空间？**
A：环境目录在 Anaconda 安装路径下的 `envs/` 文件夹中，可直接查看各环境文件夹大小。

---

> 上一章：[编程环境部署](编程环境部署.md)
> 下一章：[数据抓取（爬虫）](../数据处理/数据抓取.md)
