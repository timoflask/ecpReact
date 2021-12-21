import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import "./scripts/index.js";
import "./styles/index.js"
import IndexView from "./views/IndexView";
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <IndexView  />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
