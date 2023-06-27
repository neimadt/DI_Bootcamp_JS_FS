import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car';
import List from './List';

const root = ReactDOM.createRoot(
  document.querySelector('#root')
);

const listCars = [
  {
    id: 1,
    name: "dodge d200",
    year: "1970-01-01",
    origin: "USA"
  },
  {
    id: 2,
    name: "hi 1200d",
    year: "1970-01-01",
    origin: "USA"
  },
  {
    id: 3,
    name: "datsun pl510",
    year: "1971-01-01",
    origin: "Japan"
  },
  {
    id: 4,
    name: "chevrolet vega 2300",
    year: "1971-01-01",
    origin: "USA"
  }
];

const sayHello = () => {

  return 'Hello';
}

root.render(
  <React.StrictMode>
    <Car color="red" brand="Ferrari" list={listCars} sayHello={sayHello} />
  </React.StrictMode>
  // <h1>Hello</h1>
);
