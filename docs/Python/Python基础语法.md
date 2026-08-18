# Python 基础语法

> 本章聚焦机器学习中**高频使用的核心语法**，舍弃冷门知识点，帮助你快速掌握编写数据处理和算法代码所需的编程能力。预计学习时间 2~3 小时。

## 一、变量与数据类型

### 1.1 变量

变量就是给数据起个名字，方便后续使用。Python 中变量不需要声明类型，直接赋值即可。

```python
name = "机器学习"      # 字符串
age = 3               # 整数
score = 95.5          # 浮点数
is_ready = True       # 布尔值（True / False）
```

**命名规则：**
- 只能包含字母、数字、下划线
- 不能以数字开头
- 区分大小写（`age` 和 `Age` 是两个不同变量）
- 不能使用 Python 关键字（如 `if`、`for`、`class` 等）

### 1.2 基本数据类型

| 类型 | 说明 | 示例 |
|------|------|------|
| `int` | 整数 | `1`, `-5`, `100` |
| `float` | 浮点数（小数） | `3.14`, `-0.5`, `1.0` |
| `str` | 字符串 | `"hello"`, `'机器学习'` |
| `bool` | 布尔值 | `True`, `False` |

**类型转换：**

```python
# 整数转字符串
str(123)          # "123"

# 字符串转整数
int("456")        # 456

# 整数转浮点数
float(10)         # 10.0

# 浮点数转整数（截断小数部分）
int(3.99)         # 3
```

### 1.3 字符串操作

字符串在数据处理中非常常用，比如读取文本、处理标签等。

```python
text = "Hello Machine Learning"

# 获取长度
len(text)                    # 22

# 拼接
"Hello" + " " + "World"      # "Hello World"

# 重复
"abc" * 3                    # "abcabcabc"

# 大小写转换
text.upper()                 # 全大写
text.lower()                 # 全小写

# 去除首尾空白
"  hello  ".strip()          # "hello"

# 分割字符串
"a,b,c,d".split(",")         # ["a", "b", "c", "d"]

# 替换
text.replace("Hello", "Hi")  # "Hi Machine Learning"

# 判断是否包含
"Machine" in text            # True

# 格式化字符串（f-string，推荐）
name = "小明"
score = 90
f"{name}的成绩是{score}分"    # "小明的成绩是90分"
```

## 二、容器类型

容器用来存储多个数据，是数据处理的基础。

### 2.1 列表（list）

列表是最常用的容器，有序、可修改，类似其他语言的数组。

```python
# 创建列表
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]  # 可混合不同类型

# 访问元素（索引从 0 开始）
numbers[0]      # 1
numbers[-1]     # 5（负数索引从末尾开始）

# 切片（取子列表）
numbers[1:3]    # [2, 3]（含左不含右）
numbers[:3]     # [1, 2, 3]（从头开始）
numbers[2:]     # [3, 4, 5]（到末尾）
numbers[::2]    # [1, 3, 5]（步长为2）

# 修改元素
numbers[0] = 100

# 添加元素
numbers.append(6)       # 末尾添加：[1,2,3,4,5,6]
numbers.insert(0, 0)    # 指定位置插入：[0,1,2,3,4,5,6]

# 删除元素
numbers.remove(3)       # 删除第一个值为3的元素
numbers.pop()           # 删除并返回最后一个元素
del numbers[0]          # 删除指定索引的元素

# 常用操作
len(numbers)            # 长度
sum(numbers)            # 求和（元素需为数字）
max(numbers)            # 最大值
min(numbers)            # 最小值
sorted(numbers)         # 返回排序后的新列表
numbers.sort()          # 原地排序
numbers.reverse()       # 原地反转

# 列表推导式（高效创建列表）
squares = [x**2 for x in range(5)]   # [0, 1, 4, 9, 16]
evens = [x for x in range(10) if x % 2 == 0]  # [0, 2, 4, 6, 8]
```

### 2.2 字典（dict）

字典以"键值对"形式存储数据，类似现实中的字典（词→解释）。在机器学习中常用于存储特征、配置参数等。

```python
# 创建字典
student = {
    "name": "小明",
    "age": 20,
    "score": 95.5,
    "courses": ["数学", "英语"]
}

# 访问值
student["name"]              # "小明"
student.get("age")           # 20
student.get("gender", "未知") # 键不存在时返回默认值"未知"

# 添加/修改
student["gender"] = "男"     # 添加新键值对
student["age"] = 21          # 修改已有值

# 删除
del student["score"]         # 删除指定键
student.pop("age")           # 删除并返回值

# 遍历
for key in student:          # 遍历键
    print(key)

for key, value in student.items():  # 遍历键值对
    print(key, value)

# 常用方法
student.keys()               # 获取所有键
student.values()             # 获取所有值
student.items()              # 获取所有键值对
len(student)                 # 键值对数量
"name" in student            # 判断键是否存在
```

### 2.3 元组（tuple）

元组与列表类似，但**不可修改**。常用于存储不需要改变的数据，如坐标、配置项。

```python
point = (3, 4)
point[0]          # 3
# point[0] = 5   # 报错！元组不可修改

# 解包
x, y = point      # x=3, y=4
```

### 2.4 集合（set）

集合存储**不重复**的元素，无序。常用于去重、集合运算。

```python
s = {1, 2, 3, 3, 2}   # {1, 2, 3}（自动去重）

s.add(4)               # 添加元素
s.remove(1)            # 删除元素

# 集合运算
a = {1, 2, 3}
b = {2, 3, 4}
a & b                  # 交集：{2, 3}
a | b                  # 并集：{1, 2, 3, 4}
a - b                  # 差集：{1}
```

## 三、条件判断与循环

### 3.1 条件判断（if-elif-else）

```python
score = 85

if score >= 90:
    print("优秀")
elif score >= 80:
    print("良好")
elif score >= 60:
    print("及格")
else:
    print("不及格")
```

**比较运算符：** `==`（等于）、`!=`（不等于）、`>`、`<`、`>=`、`<=`

**逻辑运算符：** `and`（与）、`or`（或）、`not`（非）

```python
age = 20
has_id = True

if age >= 18 and has_id:
    print("可以进入")
```

### 3.2 for 循环

```python
# 遍历列表
fruits = ["苹果", "香蕉", "橙子"]
for fruit in fruits:
    print(fruit)

# 带索引遍历
for i, fruit in enumerate(fruits):
    print(i, fruit)

# range 生成数字序列
for i in range(5):        # 0, 1, 2, 3, 4
    print(i)

for i in range(1, 10, 2): # 1, 3, 5, 7, 9（起始, 终止, 步长）
    print(i)

# 遍历字典
student = {"name": "小明", "age": 20}
for key, value in student.items():
    print(f"{key}: {value}")
```

### 3.3 while 循环

```python
count = 0
while count < 5:
    print(count)
    count += 1
```

### 3.4 break 与 continue

```python
# break：跳出整个循环
for i in range(10):
    if i == 5:
        break
    print(i)   # 输出 0,1,2,3,4

# continue：跳过本次循环，继续下一次
for i in range(5):
    if i == 2:
        continue
    print(i)   # 输出 0,1,3,4
```

## 四、函数

函数是一段可重复使用的代码块，用于封装特定功能。

### 4.1 定义与调用

```python
def greet(name):
    """打招呼函数"""
    return f"你好，{name}！"

# 调用
result = greet("小明")
print(result)   # 你好，小明！
```

### 4.2 参数类型

```python
# 默认参数
def power(base, exp=2):
    return base ** exp

power(3)       # 9（exp 使用默认值2）
power(3, 3)    # 27

# 关键字参数调用
power(exp=3, base=2)   # 8（顺序可换）

# 可变参数
def sum_all(*numbers):
    return sum(numbers)

sum_all(1, 2, 3, 4)    # 10
```

### 4.3 返回值

```python
def calc(a, b):
    """返回多个值（实际是元组）"""
    return a + b, a - b, a * b

add, sub, mul = calc(10, 3)
```

### 4.4 Lambda 匿名函数

```python
# 简单函数的简写
square = lambda x: x ** 2
square(5)    # 25

# 常用于排序、过滤等场景
pairs = [(1, 3), (4, 1), (2, 2)]
pairs.sort(key=lambda x: x[1])  # 按第二个元素排序
# 结果：[(4, 1), (2, 2), (1, 3)]
```

## 五、文件操作

机器学习中经常需要读取数据文件、保存结果。

```python
# 读取文件（推荐 with 语句，自动关闭文件）
with open("data.txt", "r", encoding="utf-8") as f:
    content = f.read()           # 读取全部内容
    lines = f.readlines()        # 按行读取，返回列表

# 逐行读取
with open("data.txt", "r", encoding="utf-8") as f:
    for line in f:
        print(line.strip())

# 写入文件（"w" 覆盖写入，"a" 追加写入）
with open("output.txt", "w", encoding="utf-8") as f:
    f.write("第一行\n")
    f.write("第二行\n")
```

**文件打开模式：**

| 模式 | 说明 |
|------|------|
| `r` | 只读（默认） |
| `w` | 写入（覆盖原有内容） |
| `a` | 追加（在末尾添加） |
| `r+` | 读写 |

## 六、异常处理

程序运行时可能出错，用 `try-except` 捕获异常，避免程序崩溃。

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("除数不能为零")
except Exception as e:
    print(f"发生错误：{e}")
else:
    print("没有异常时执行")
finally:
    print("无论是否异常都执行")
```

## 七、模块与导入

Python 通过模块组织代码，使用 `import` 导入。

```python
# 导入整个模块
import math
math.sqrt(16)    # 4.0

# 导入模块中的特定函数
from math import sqrt, pi
sqrt(16)         # 4.0
pi               # 3.1415926...

# 导入并起别名
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
```

**机器学习常用标准库：**

| 模块 | 用途 |
|------|------|
| `math` | 数学运算 |
| `random` | 随机数 |
| `os` | 操作系统接口 |
| `json` | JSON 数据处理 |
| `datetime` | 日期时间 |
| `collections` | 高级容器（Counter、defaultdict 等） |

## 八、机器学习高频语法速查

以下是编写机器学习代码时最常遇到的语法模式：

```python
# 1. 列表推导式 — 快速生成/转换数据
features = [x * 2 for x in raw_data if x > 0]

# 2. 字典推导式 — 构建映射关系
label_map = {idx: name for idx, name in enumerate(labels)}

# 3. zip — 同时遍历多个列表
for x, y in zip(features, labels):
    print(x, y)

# 4. enumerate — 遍历同时获取索引
for idx, value in enumerate(data):
    print(idx, value)

# 5. 解包 — 快速赋值
a, b, c = [1, 2, 3]

# 6. 条件表达式（三元运算）
result = "正数" if x > 0 else "非正数"

# 7. any / all — 判断序列条件
any(x > 0 for x in data)   # 是否有任意一个大于0
all(x > 0 for x in data)   # 是否全部大于0

# 8. sorted 自定义排序
sorted(data, key=lambda x: x[1], reverse=True)
```

## 九、练习建议

1. 打开 Python 交互环境，逐节运行示例代码，观察输出
2. 尝试用列表和字典存储一份学生成绩表，并实现查询、排序、统计功能
3. 编写一个函数，输入一个数字列表，返回其中的最大值、最小值和平均值
4. 尝试读取一个文本文件，统计每个单词出现的次数（提示：使用字典）

---

> 上一章：[Python 安装入门](../下载与环境配置.md)
> 下一章：[编程环境部署](../开发环境/编程环境部署.md)
