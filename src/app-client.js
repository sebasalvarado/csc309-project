import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes.js';

window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById("main"));
};
