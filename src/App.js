import React, {Component} from 'react';

import NavigationBar from './NavigationBar';
// import PostNewListing from './PostNewListing';
// <PostNewListing/>
import ViewItem from './ViewItem';

class App extends Component{
  render(){
    return(
      <div>
        <NavigationBar/>
        <ViewItem/>
      </div>
    );
  }
}

export default App;
