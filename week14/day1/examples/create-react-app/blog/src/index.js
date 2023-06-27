import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Car from './Car';
import Car2 from './Car2';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.querySelector('#root')
);

root.render(
  <React.StrictMode>
    <Car2 />
  </React.StrictMode>
  // <h1>Hello</h1>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
