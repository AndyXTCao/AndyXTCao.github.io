---
layout:     post
title:      iOS中的RunLoop
subtitle:   
date:       2019-09-17
author:     AndyCao
header-img: img/post-bg-coffee.jpeg
catalog: true
tags:
    - iOS
    - Objective-C
---

### 什么是RunLoop
顾名思义，就是运行循环，在程序运行过程中，循环做一些事情。先简单看下下面两个示例：

#### 示例1
```swift
int main(int argc, char * argv[]) {
    @autoreleasepool {
       NSLog(@"Hello World!");
    }
    return 0;
}
```
由于没有RunLoop，在执行完NSLog之后，程序即将退出

#### 示例2
```swift
int main(int argc, char * argv[]) {
    @autoreleasepool {
        return UIApplicationMain(argc, argv, nil, NSStringFromClass([AppDelegate class]));
    }
}
```
在初始化UIApplication的时候，会创建一个Main RunLoop。由于Main RunLoop的存在，程序不会立马退出，而是保持运行状态。


#### 应用范畴
- 定时器（Timer）、PerformSelector
- GCD Async Main Queue
- 事件响应、手势识别、界面刷新
- 网络请求
- AutoreleasePool

### RunLoop对象
iOS中，有2套API可以访问和使用RunLoop
- Foundation框架中的NSRunLoop
- CoreFoundation框架中的CFRunLoopRef

NSRunLoop是基于CFRunLoopRef的一层OC包装；[CFRunLoopRef](https://opensource.apple.com/tarballs/CF/)是开源的


### RunLoop与线程
- 每条线程都有唯一的一个与之对应的RunLoop对象
- RunLoop保存在一个全局的Dictionary里，线程作为key，RunLoop作为value
- 线程刚创建时并没有RunLoop对象，RunLoop会在第一次获取它时创建
- RunLoop会在线程结束时销毁；线程没了，那么RunLoop也就没了
- 主线程的RunLoop已经自动获取（创建），子线程默认没有开启RunLoop(敲重点！！！)

### 获取RunLoop对象
Foundation
```swift
[NSRunLoop currentRunLoop]; // 获得当前线程的RunLoop对象
[NSRunLoop mainRunLoop]; // 获得主线程的RunLoop对象
```
CoreFoundation
```swift
CFRunLoopGetCurrent(); // 获得当前线程的RunLoop对象
CFRunLoopGetMain(); // 获得主线程的RunLoop对象

```

### CoreFoundation中关于RunLoop的5个类
- CFRunLoopRef
- CFRunLoopModeRef
- CFRunLoopSourceRef
- CFRunLoopTimerRef
- CFRunLoopObserverRef

#### CFRunLoopRef在源码中的定义
![](https://user-gold-cdn.xitu.io/2019/11/12/16e5e2730bd41eda?w=408&h=175&f=png&s=46955)

#### CFRunLoopModeRef在源码中的定义
![](https://user-gold-cdn.xitu.io/2019/11/12/16e5e278eae441f7?w=500&h=184&f=png&s=53196)

CFRunLoopModeRef代表RunLoop的的运行模式，常用的模式有2种：
- **kCFRunLoopDefaultMode**（NSDefaultRunLoopMode）：默认模式，通常主线程就是在这个Mode下运行
- **UITrackingRunLoopMode**：滚动模式，用于 ScrollView 追踪触摸滑动，保证界面滑动时不受其他 Mode 影响，在滚动模式下RunLoop只处理与滚动相关的事件

### RunLoop的内部组成
一个RunLoop包含若干个Mode，每个Mode又包含若干个Source0/Source1/Timer/Observer
![](https://user-gold-cdn.xitu.io/2019/11/12/16e5e303d8e8e793?w=872&h=578&f=png&s=224556)

- **Timer**表示定时器；主要处理NSTimer、performSelector:withObject:afterDelay:
- **Observer**表示监听器；主要处理UI刷新（beforeWaiting）、监听RunLoop的状态、AutoreleasePool（beforeWaiting）等
- **Source0**表示要处理的事情；比如触摸事件、performSelector:onThread:
- **Source1**表示要处理的事情；比如基于Port的线程间的通信，系统事件捕捉

RunLoop启动时只能选择其中一个Mode，作为currentMode
如果需要切换Mode，只能退出当前Loop，再重新选择一个Mode进入
如果Mode里没有任何Source0/Source1/Timer/Observer，RunLoop会马上退出

例如创建一个 Timer 并加到 DefaultMode 时，Timer 会得到重复回调，但此时滑动一个TableView时，RunLoop 会将 mode 切换为 TrackingRunLoopMode，这时 Timer 就不会被回调，并且也不会影响到滑动操作。

有时候需要一个 Timer，在两个 Mode 中都能得到回调，一种办法就是将这个 Timer 分别加入这两个 Mode。还有一种方式，就是将 Timer 加入到顶层的 RunLoop 的 “commonModeItems” 中。”commonModeItems” 被 RunLoop 自动更新到所有具有”Common”属性的 Mode 里去。

### CFRunLoopObserverRef
```swift
/* Run Loop Observer Activities */
typedef CF_OPTIONS(CFOptionFlags, CFRunLoopActivity) {
    kCFRunLoopEntry = (1UL << 0),         // 即将进入Loop
    kCFRunLoopBeforeTimers = (1UL << 1),  // 即将进入Timer
    kCFRunLoopBeforeSources = (1UL << 2), // 即将处理Source
    kCFRunLoopBeforeWaiting = (1UL << 5), // 即将进入休眠
    kCFRunLoopAfterWaiting = (1UL << 6),  // 即将从休眠中唤醒
    kCFRunLoopExit = (1UL << 7),          // 即将退出Loop
    kCFRunLoopAllActivities = 0x0FFFFFFFU
};
```
可以添加Observer来监听RunLoop的所有状态
```swift
// 创建Observer
CFRunLoopObserverRef observer = CFRunLoopObserverCreateWithHandler(kCFAllocatorDefault, kCFRunLoopAllActivities, YES, 0, ^(CFRunLoopObserverRef observer, CFRunLoopActivity activity) {
    switch (activity) {
        case kCFRunLoopEntry: {
            NSLog(@"kCFRunLoopEntry");
            break;
        }
        case kCFRunLoopBeforeTimers: {
            NSLog(@"kCFRunLoopBeforeTimers");
            break;
        }
        case kCFRunLoopBeforeSources: {
            NSLog(@"kCFRunLoopBeforeSources");
            break;
        }
        case kCFRunLoopBeforeWaiting: {
            NSLog(@"kCFRunLoopBeforeWaiting");
            break;
        }
        case kCFRunLoopAfterWaiting: {
            NSLog(@"kCFRunLoopAfterWaiting");
            break;
        }
        case kCFRunLoopExit: {
            NSLog(@"kCFRunLoopExit");
            break;
        }
            
        default:
            break;
    }
});
// 添加Observer到RunLoop中
CFRunLoopAddObserver(CFRunLoopGetMain(), observer, kCFRunLoopCommonModes);
// 释放
CFRelease(observer);
```

#### RunLoop运行逻辑
![](https://images.cnblogs.com/cnblogs_com/plusone/1527513/o_RunLoop_1.png)

```swift
int32_t __CFRunLoopRun()
{
    // 通知即将进入runloop
    __CFRunLoopDoObservers(KCFRunLoopEntry);
    
    do
    {
        // 通知将要处理timer和source
        __CFRunLoopDoObservers(kCFRunLoopBeforeTimers);
        __CFRunLoopDoObservers(kCFRunLoopBeforeSources);
        
        // 处理非延迟的主线程调用
        __CFRunLoopDoBlocks();
        // 处理UIEvent事件
        __CFRunLoopDoSource0();
        
        // GCD dispatch main queue
        CheckIfExistMessagesInMainDispatchQueue();
        
        // 即将进入休眠
        __CFRunLoopDoObservers(kCFRunLoopBeforeWaiting);
        
        // 等待内核mach_msg事件
        mach_port_t wakeUpPort = SleepAndWaitForWakingUpPorts();
        
        // Zzz...
        
        // 从等待中醒来
        __CFRunLoopDoObservers(kCFRunLoopAfterWaiting);
        
        // 处理因timer的唤醒
        if (wakeUpPort == timerPort)
            __CFRunLoopDoTimers();
        
        // 处理异步方法唤醒,如dispatch_async
        else if (wakeUpPort == mainDispatchQueuePort)
            __CFRUNLOOP_IS_SERVICING_THE_MAIN_DISPATCH_QUEUE__()
            
        // UI刷新,动画显示
        else
            __CFRunLoopDoSource1();
        
        // 再次确保是否有同步的方法需要调用
        __CFRunLoopDoBlocks();
        
    } while (!stop && !timeout);
    
    // 通知即将退出runloop
    __CFRunLoopDoObservers(CFRunLoopExit);
}
```

### RunLoop的实际应用
#### NSTimer失效
默认情况下，添加NSTimer执行timerWithTimeInterval方法，当有滚动事件触发时，会导致NSTimer失效
```swift
- (void)logCount {
    NSLog(@"1111");
}

- (void)viewDidLoad {
    [super viewDidLoad];
    
    NSTimer *timer = [NSTimer timerWithTimeInterval:1 target:self selector:@selector(logCount) userInfo:nil repeats:YES];
}
```

RunLoop在同一时间只能运行一种模式，一旦有滚动事件触发时，RunLoop会切换到UITrackingRunLoopMode模式。
可以这样解决：
```swift
[[NSRunLoop currentRunLoop] addTimer:timer forMode:NSDefaultRunLoopMode];
[[NSRunLoop currentRunLoop] addTimer:timer forMode:UITrackingRunLoopMode];
```
也可以这样：
```swift
// NSDefaultRunLoopMode 和 UITrackingRunLoopMode默认是被标记为common mode的
[[NSRunLoop currentRunLoop] addTimer:timer forMode:NSRunLoopCommonModes];
```