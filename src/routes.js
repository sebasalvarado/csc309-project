'use strict';
import React, {Component} from 'react';
import {Route, IndexRoute} from 'react-router';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import PostNewListing from './components/PostNewListing'
import ViewItem from './components/ViewItem';
import SearchItem from './components/SearchItem';
import NotFoundPage from './components/NotFoundPage';

/*Add Components to this file with their corresponding route as we continue to develop
 */
const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage}/>
    <Route path="/postListing" component={PostNewListing}/>
    <Route path="/viewItem" component={ViewItem}/>
    <Route path="/search" component={SearchItem}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
