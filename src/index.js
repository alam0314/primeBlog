import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"

const root = ReactDOM
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ,document.querySelector('#root')
);


