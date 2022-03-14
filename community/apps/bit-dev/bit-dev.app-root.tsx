import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { BitDevApp } from './app';

ReactDOM.render(
  <BrowserRouter>
    <BitDevApp />
  </BrowserRouter>,
  document.getElementById('root')
);
