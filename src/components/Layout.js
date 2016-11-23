import React, {Component} from 'react';

import NavigationBar from './NavigationBar';


class Layout extends Component{
  render(){
    return(
      <div>
        <header>
        </header>
      <div>
        <NavigationBar/>
      </div>
      <div>{this.props.children}</div>
      <footer>
        <p id="footer">
          Application Demo CSC309 Fall 2016 @ University Of Toronto.
        </p>
      </footer>
      </div>
    );
  }
}

export default Layout;
