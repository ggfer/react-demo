import React, { Component } from 'react';

import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

class MockApp extends Component {
  render() {
    const { PayIncrease, PayDecrease } = this.props;
    return (
      <div className="App">
        <h2>当月工资为{this.props.tiger}</h2>
        <button onClick={PayIncrease}>升职加薪</button>
        <button onClick={PayDecrease}>迟到罚款</button>
      </div>
    );
  }
}

const tiger = 10000;

//这是action
const increase = {
  type: '涨工资',
};
const decrease = {
  type: '扣工资',
};
//这是reducer
const reducer = (state = tiger, action) => {
  switch (action.type) {
    case '涨工资':
      return (state += 100);
    case '扣工资':
      return (state -= 100);
    default:
      return state;
  }
};

//创建store
const store = createStore(reducer);

//参数1：需要渲染什么数据
function mapStateToProps(state) {
  return {
    tiger: state,
  };
}
//参数2：需要触发什么行为
function mapDispatchToProps(dispatch) {
  return {
    PayIncrease: () => dispatch({ type: '涨工资' }),
    PayDecrease: () => dispatch({ type: '扣工资' }),
  };
}

// 还有另外两个参数不写是默认：[mergeProps], [options]

//连接组件
MockApp = connect(mapStateToProps, mapDispatchToProps)(MockApp);

/*
我们让MockApp在不改变原有内部结构的情况下，进行两个操作，让MockApp拥有涨扣工资的方法：
1、Provider：子组件包裹，
2、connect
 */
class ReduxReactMock extends Component {
  state = {};
  render() {
    return (
      <Provider store={store}>
        <MockApp />
      </Provider>
    );
  }
}

export default ReduxReactMock;
