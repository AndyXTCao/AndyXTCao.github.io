---
layout:     post
title:      session和cookie
subtitle:   
date:       2019-09-11
author:     AndyCao
header-img: img/post-bg-coffee.jpeg
catalog: true
tags:
    - 网络
    - http
---

session和cookie是对HTTP协议，无状态特点的补偿

![](https://user-gold-cdn.xitu.io/2019/11/16/16e74cb85c57b427?w=880&h=222&f=png&s=52404)

### cookie

cookie主要用来记录用户状态，区分用户

**状态保存在客户端**

![](https://user-gold-cdn.xitu.io/2019/11/16/16e74ce33d896280?w=954&h=392&f=png&s=78578)

客户端发送的cookie在http请求报文的cookie头部字段中
服务端设置http响应报文的set-cookie头部字段中

#### 怎样修改cookie
- 新cookie覆盖旧cookie
- 覆盖规则：name、path、domain等需要与原cookie一致

#### 怎样删除cookie
- 新cookie覆盖旧cookie
- 覆盖规则：name、path、domain等需要与原cookie一致
- 设置cookie的expires等于过去的一个时间点，或者maxAge等于0

#### 怎样确保cookie的安全
- 对cookie进行加密处理
- 只在https上携带cookie
- 设置cookie为httpOnly，防止跨站脚本攻击


### session
session 也是用来记录用户状态的，区分用户

**状态存放在服务器端**

#### session和cookie的关系
session需要依赖cookie机制
![](https://user-gold-cdn.xitu.io/2019/11/16/16e74e4d3126bed1?w=1438&h=588&f=png&s=178240)