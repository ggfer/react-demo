import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    console.log(this.props);
  }
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
//参数1：需要渲染什么数据,这个参数不能不写，如果不需要的时候可以用null空出来
function mapStateToProps(state1) {
  return {
    tiger: state1,
  };
}
//参数2：需要触发什么行为
function mapDispatchToProps(dispatch) {
  return {
    PayIncrease: () => dispatch({ type: '涨工资' }),
    PayDecrease: () => dispatch({ type: '扣工资' }),
  };
}

export default App = connect(mapStateToProps, mapDispatchToProps)(App);
