import React, {Component} from 'react';
import {Link} from 'react-router';

export default class NotFoundPage extends Component{
  render(){
    return(
      <div>
        <h1>404</h1>
        <h2>Page not found</h2>
        <p>
          <Link to="/"> Go back to main page </Link>
        </p>
      </div>
    );
  }
}
