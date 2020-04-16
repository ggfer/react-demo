import React from 'react';

//这是redux的原始state
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

//派发事件
store.dispatch(increase);

//订阅事件：它的作用就是每当reducer返回新的数据 它就会自动更新页面 把UI组件的state更新下 不然的话 虽然state变化了 页面仍不会更新（虽然现在还没有其他组件）
store.subscribe(() => console.log(store.getState()));

export default ReduxOriginal;
