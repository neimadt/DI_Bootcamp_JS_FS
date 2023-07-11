import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));

const render = () => {

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
};

render();

store.subscribe(render);
