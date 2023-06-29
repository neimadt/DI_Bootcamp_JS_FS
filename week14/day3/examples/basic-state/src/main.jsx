import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './FuncComponent'
import App from './ClassComponent'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App label="2023" message="Go 4 it" />
  </React.StrictMode>
);
