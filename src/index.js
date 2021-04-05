import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom";
import './index.css';
import App from './App';
import swDev from './swDev';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./Redux/Store"


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
    <Provider store={store}>
      <App/>
    </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

swDev();