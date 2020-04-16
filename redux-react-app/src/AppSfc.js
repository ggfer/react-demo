import React, { Component } from 'react';
import { connect } from 'react-redux';

const AppSfc = (props) => {
  const { PayIncrease, PayDecrease } = props;

  //参数1：需要渲染什么数据
  const mapStateToProps = (state1) => {
    return {
      tiger: state1,
    };
  };
  //参数2：需要触发什么行为
  const mapDispatchToProps = (dispatch) => {
    return {
      PayIncrease: () => dispatch({ type: '涨工资' }),
      PayDecrease: () => dispatch({ type: '扣工资' }),
    };
  };
  return (
    <div className="App">
      <h2>当月工资为{tiger}</h2>
      <button onClick={PayIncrease}>升职加薪</button>
      <button onClick={PayDecrease}>迟到罚款</button>
    </div>
  );
};

export default AppSfc = connect(mapStateToProps, mapDispatchToProps)(AppSfc);
