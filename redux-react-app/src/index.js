import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';

import { Provider } from 'react-redux';
import reducer from './reducer';

import ReduxReactMock from './redux-react-mock';

// import AppSfc from './AppSfc';

//创建store
const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <div>
      <span>正常入门写法</span>
      <ReduxReactMock />
    </div>
    <div>
      <span>cc写法</span>
      <Provider store={store}>
        <App />
        {/* <AppSfc /> */}
      </Provider>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
