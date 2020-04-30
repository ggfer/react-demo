# react-redux

## redux

一种数据处理的工具。本质上这和 react 无关，并且实现起来会破坏组件结构，正如[`./src/redux-orginal.js`](./src/redux-orginal.js)中实现。

## react-redux 优势

A. 共享内容。深层组件可以与父类共用一部分自定义的数据和方法

B. 依赖注入。不会破坏原组件结构

## 实现方式 1：有状态组件

### A. 组件外部

**Provider** 组件包裹原始组件，提供一个顶层容器的作用，并且传入希望传入的内容（内容包括数据和方法）。creatStore 代入的希望代入的部分，这部分建议单独写，如[`./src/reducer.js`](./src/reducer.js)、[`./src/index.js`](./src/index.js)。

### B. 组件周围

增加 4 个**方法**，用 **connect** 把方法和原组件连接在一起。具体写法如[`./src/redux-react-mock.js`](./src/redux-react-mock.js)

## 存在问题

### 无状态组件

写法(todo-app-with-redux 这个例子中已解决)

### actionTypes

action 是直接卸载 reducer 中，没有分出去 actionTypes

### 异步请求。

理论上是用 axios 来实现，但是问题是 store 只能接受 action 对象，而目的是请求异步得到 response，也就是想通过函数得到异步的请求结果。步骤如下：

1. thunk 引入。createStore()的时候，原先只有 reducer，这里需要通过增强的方式加入中间件 thunk

```javascript
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
```

2. dispatch。原先我们想要 connect 粘合的部分不改变，原组件里面调用的方法的具体实现里面怎么写呢？axios 是异步请求的基础，另外一点比较重要的是 axios 支持 dispatch,那么就在收到 res.data.Body 之后，把 Body 的内容封装到 action 中，再 dispatch(action)。

3. 订阅（使用方法）。调用 store 的内容方法暂时只知道三种，一种是 connect 粘合 types 到需要的那个组件的 props 中；另外一种是 componentDidMount()，生命周期就发起 axios；当然还有原始的在 constructor 中调用赋值使得 render。

> 困惑点：subscribe,这个在 redux devtools 中有讲解

## 中间件增强

在上一节中讲到原始 store 的创建方式为 createStore(reducer)，当然在这个 reducer 后面，可以增加一些额外的对象，这些叫做叫做中间件，比如可以有 thunk，可以有 redux devtools

## Redux DevTools

> 方便在 chrome 中配合 extension ，进行 actionTypes 对应的 debug,不过比较好奇

### 功能

1. State: Action/Diff/State/Test

2. call your actionTypes callback manually.

3. settings manually.

### Demo

Live demos to use the extension with:[http://extension.remotedev.io/#demo](http://extension.remotedev.io/#demo), but just first two demos Counter and TodoMVC, are recommended.

## 参考链接

- [redux+react-redux+示例的快速上手体验](https://segmentfault.com/a/1190000015684895)

- [React Redux 7.2 官方文档](https://react-redux.js.org/introduction/quick-start)

- [Redux DevTools](http://extension.remotedev.io/)

- [React & Redux With ExpressJS (2016) - 11. Debugging with Redux Dev Tools](https://www.youtube.com/watch?v=6ygcbRpZFR4)
