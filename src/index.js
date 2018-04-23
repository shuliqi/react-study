import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// React-Redux 提供Provider组件，可以让容器组件拿到state。
import { Provider } from 'react-redux'
import { createStore } from 'redux'
const store = createStore()
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
