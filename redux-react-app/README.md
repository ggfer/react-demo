# react-redux

## 1. redux

> 一种数据处理的工具。本质上这和 react 无关，并且实现起来会破坏组件结构，正如`./redux-orginal.js`中实现。

## 2. 优势

### A. 共享内容。深层组件可以与父类共用一部分自定义的数据和方法

### B. 依赖注入。不会破坏原组件结构

## 3. 实现方式一：有状态组件

虽然只有两个

### A. 组件外部

> **Provider** 组件包裹原始组件，提供一个顶层容器的作用，并且传入希望传入的内容（内容包括数据和方法）。creatStore 代入的希望代入的部分，这部分建议单独写，如`./reducer.js`、[`./index.js`](./src/index.js)。

### B. 组件周围

> 增加 4 个**方法**，用 **connect** 把方法和原组件连接在一起。具体写法如`./redux-react-mock.js`

## 4. 参数详情

[mapStateToProps], [mapDispatchToProps], [mergeProps], [options]

## 5. 实现方式二：无状态组件

## 6. 存在问题

- sfc 写法

-

## 参考链接

- [redux+react-redux+示例的快速上手体验](https://segmentfault.com/a/1190000015684895)

- [React Redux 7.2 官方文档](https://react-redux.js.org/introduction/quick-start)
