import React, {Component} from 'react';

import NavigationBar from './NavigationBar';


class Layout extends Component{
  render(){
    return(
      <div>
        <header>
        </header>
      <div className>
        <NavigationBar/>
      </div>
      <div>{this.props.children}</div>
      <footer>
        <p>
          This application is a demo project for CSC309 at the University of Toronto. Fall 2016
        </p>
      </footer>
      </div>
    );
  }
}

export default Layout;
