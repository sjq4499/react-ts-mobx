import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react';
import store from './store/index';
import './assets/css/index.css';

ReactDOM.render(
   <Provider {...store}>
      <App />
   </Provider>,
   document.getElementById('root') as HTMLElement
);
