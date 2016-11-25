import React, {Component} from 'react';

import NavigationBar from './NavigationBar';


class Layout extends Component{
  render(){
    return(
      <div>
        <header>
        </header>
<<<<<<< HEAD
      <div className>
=======
      <div>
>>>>>>> 60d589fb5dec52210895cdc861e756e4b5d3a7b8
        <NavigationBar/>
      </div>
      <div>{this.props.children}</div>
      <footer>
<<<<<<< HEAD
        <p>
          This application is a demo project for CSC309 at the University of Toronto. Fall 2016
=======
        <p id="footer">
          Application Demo CSC309 Fall 2016 @ University Of Toronto.
>>>>>>> 60d589fb5dec52210895cdc861e756e4b5d3a7b8
        </p>
      </footer>
      </div>
    );
  }
}

export default Layout;
