import React from 'react';
import { render } from 'react-dom';

import NavBar from './NavBar';
import PostNewListing from './PostNewListing';
import './index.css';

render(
  <NavBar />
  <PostNewListing />,
  document.getElementById('root')
);
