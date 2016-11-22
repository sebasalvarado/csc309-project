import React, {Component} from 'react';

import NavigationBar from './NavigationBar';
import PostNewListing from './PostNewListing';


class App extends Component{
  render(){
    return(
      <div>
        <NavigationBar/>
        <PostNewListing />
      </div>
    );
  }
}

export default App;
