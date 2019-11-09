---
layout:     post
title:      swift5-方法(Method)
subtitle:   
date:       2019-09-10
author:     AndyCao
header-img: img/post-bg-coffee.jpeg
catalog: true
tags:
    - iOS
    - swift
---

### 方法（Method）

- 枚举、结构体、类都可以定义实例方法、类型方法
  - 实例方法（instance method）：通过实例对象调用
  - 类型方法（type method）：通过类型调用，用 **static** 或 **class** 关键字定义

- self
  - 在实例方法中，self代表实例对象
  - 在类型方法中，self代表类型

```swift
class Car {
    static var count = 0
    init() {
        Car.count += 1
    }
    static func getCount() -> Int { count }
}
let car0 = Car()
let car1 = Car()
let car2 = Car()
print(Car.getCount()) // 3
```

在类型方法 getCount 中，count 等价于 self.count、Car.self.count、Car.count

### mutating

- 结构体和枚举是值类型，默认情况下，值类型的属性不能被自身的实例方法修改
- 在 **func** 前添加 **mutating** 可以允许这种修改行为

添加前：

![](https://user-gold-cdn.xitu.io/2019/9/10/16d1bb83f16d784d?w=1444&h=298&f=png&s=194596)

添加后：

![](https://user-gold-cdn.xitu.io/2019/9/10/16d1bb995f5d2a6c?w=1340&h=274&f=png&s=93307)

### @discardableResult

在 **func** 前添加 **@discardableResult** ，可以消除函数调用后，返回值未被使用的警告

添加前：

![](https://user-gold-cdn.xitu.io/2019/9/10/16d1bbdc58227b85?w=1462&h=368&f=png&s=183058)

添加后：

![](https://user-gold-cdn.xitu.io/2019/9/10/16d1bc017f407c6a?w=1166&h=352&f=png&s=137711)