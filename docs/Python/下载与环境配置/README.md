# Python 安装入门

> 本章从零开始，手把手教你下载、安装 Python 解释器，并验证环境是否正常。无需任何编程基础，跟着步骤操作即可。

## 一、什么是 Python

Python 是一门**简单易学、功能强大**的编程语言，也是机器学习领域最主流的开发语言。它语法简洁、社区活跃，拥有海量的第三方库（如 NumPy、Pandas、scikit-learn 等），能让你把精力集中在"解决问题"上，而不是纠结于复杂的语法细节。

简单来说：**想学机器学习，Python 是你的第一选择。**

## 二、下载 Python

### 2.1 官方下载地址

访问 Python 官网下载页面：

- 官网地址：[https://www.python.org/downloads/](https://www.python.org/downloads/)

> 受网络环境影响，官网访问可能较慢。国内用户可使用华为云镜像站下载：
> - 华为云镜像：[https://mirrors.huaweicloud.com/python/](https://mirrors.huaweicloud.com/python/)

### 2.2 选择版本

- **推荐版本**：Python 3.10 或 3.11（稳定、兼容性好）
- **不推荐**：Python 2.x（已停止维护）
- **注意**：版本号越新功能越多，但部分第三方库可能尚未适配最新版，建议选择比最新版低 1~2 个小版本的稳定版。

### 2.3 选择对应系统的安装包

| 操作系统 | 下载文件示例 |
|---------|------------|
| Windows 64位 | `python-3.11.9-amd64.exe` |
| macOS Intel | `python-3.11.9-macos11.pkg` |
| macOS Apple Silicon | `python-3.11.9-macos11.pkg`（通用安装包） |
| Linux | 通常系统自带，或通过包管理器安装 |

## 三、安装 Python

### 3.1 Windows 系统安装步骤

1. **双击下载好的 `.exe` 安装包**，启动安装向导。

2. **关键一步：勾选 "Add Python to PATH"**
   
   在安装界面最下方，有一个复选框 `Add Python.exe to PATH`，**务必勾选**！
   
   勾选后，系统才能在任意目录下识别 `python` 命令。如果忘记勾选，后续需要手动配置环境变量，比较麻烦。

3. **选择安装方式**
   
   - **Install Now**（默认安装）：一键安装，适合新手。
   - **Customize installation**（自定义安装）：可选择安装路径和组件，适合有经验的用户。
   
   新手推荐直接点击 `Install Now`。

4. **等待安装完成**，出现 "Setup was successful" 即安装成功。

### 3.2 macOS 系统安装步骤

1. 双击下载好的 `.pkg` 安装包。
2. 按照向导提示，一路点击"继续"。
3. 同意许可协议，选择安装目标磁盘。
4. 点击"安装"，输入系统密码确认。
5. 等待安装完成。

### 3.3 Linux 系统

多数 Linux 发行版已自带 Python 3。在终端输入以下命令检查：

```bash
python3 --version
```

如果未安装或版本过低，使用系统包管理器安装：

```bash
# Ubuntu / Debian
sudo apt update
sudo apt install python3 python3-pip

# CentOS / RHEL
sudo yum install python3 python3-pip
```

## 四、验证安装是否成功

安装完成后，需要验证 Python 是否能正常运行。

### 4.1 Windows 验证

1. 按下 `Win + R`，输入 `cmd`，回车打开命令提示符。
2. 输入以下命令：

```cmd
python --version
```

3. 如果输出类似 `Python 3.11.9` 的版本号，说明安装成功。

> 如果提示 "python 不是内部或外部命令"，说明安装时未勾选 PATH，需要重新运行安装包选择 "Modify" 修复，或手动配置环境变量。

### 4.2 macOS / Linux 验证

打开终端（Terminal），输入：

```bash
python3 --version
```

输出版本号即表示成功。

## 五、第一个 Python 程序

环境验证通过后，来写一个最简单的程序感受一下：

### 5.1 交互式运行

在命令行输入 `python`（Windows）或 `python3`（macOS/Linux），进入 Python 交互环境：

```python
>>> print("Hello, Machine Learning!")
Hello, Machine Learning!
```

输入 `exit()` 或按 `Ctrl + Z`（Windows）/ `Ctrl + D`（macOS/Linux）退出交互环境。

### 5.2 脚本文件运行

1. 新建一个文本文件，命名为 `hello.py`。
2. 用记事本或任意文本编辑器打开，写入：

```python
print("Hello, Machine Learning!")
print("欢迎来到机器学习的世界！")
```

3. 保存文件，在命令行中切换到文件所在目录，运行：

```bash
python hello.py
```

4. 看到输出即表示运行成功。

## 六、pip 包管理工具

Python 之所以强大，很大程度上因为有海量第三方库。`pip` 是 Python 的官方包管理工具，用于安装、升级、卸载第三方库。

### 6.1 验证 pip

```bash
pip --version
```

或

```bash
python -m pip --version
```

### 6.2 常用 pip 命令

```bash
# 安装一个库
pip install 库名

# 安装指定版本
pip install 库名==版本号

# 升级一个库
pip install --upgrade 库名

# 卸载一个库
pip uninstall 库名

# 查看已安装的库
pip list

# 导出已安装库清单
pip freeze > requirements.txt
```

### 6.3 配置国内镜像源（推荐）

默认 pip 从国外服务器下载库，速度较慢。建议配置国内镜像源：

**临时使用（单次安装）：**

```bash
pip install 库名 -i https://pypi.tuna.tsinghua.edu.cn/simple
```

**永久配置（Windows）：**

在用户目录下创建 `pip` 文件夹，新建 `pip.ini` 文件，写入：

```ini
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
trusted-host = pypi.tuna.tsinghua.edu.cn
```

**永久配置（macOS/Linux）：**

```bash
mkdir -p ~/.pip
echo '[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
trusted-host = pypi.tuna.tsinghua.edu.cn' > ~/.pip/pip.conf
```

常用国内镜像源：

| 镜像源 | 地址 |
|-------|------|
| 清华大学 | `https://pypi.tuna.tsinghua.edu.cn/simple` |
| 阿里云 | `https://mirrors.aliyun.com/pypi/simple/` |
| 华为云 | `https://mirrors.huaweicloud.com/repository/pypi/simple` |

## 七、常见问题

**Q：安装时忘记勾选 Add to PATH 怎么办？**
A：重新运行安装包，选择 "Modify"，在下一步勾选 "Add Python to environment variables"，完成修复。

**Q：Windows 下输入 python 打开了微软商店怎么办？**
A：这是因为系统自带的应用执行别名优先级更高。进入「设置 → 应用 → 高级应用设置 → 应用执行别名」，关闭 `python.exe` 和 `python3.exe` 的别名即可。

**Q：pip 安装库时报错 "Permission denied"？**
A：Windows 用管理员身份运行命令提示符；macOS/Linux 在命令前加 `sudo`，或使用 `--user` 参数安装到用户目录。

**Q：如何同时安装多个 Python 版本？**
A：初学者不建议同时安装多个版本。如有需要，推荐使用 Anaconda 管理多环境（后续章节会详细讲解）。

---

> 下一章：[编程环境部署](../开发环境/编程环境部署.md) — 搭建机器学习专属开发环境。
