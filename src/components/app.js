import React from 'react';
import NavigationBar from './navigation-bar';
import NotFoundPage from './not-found-page';



export default class App extends React.Component {
    constructor(props) {
        super(props);

        // set states here



    }



    render() {
        return (
            <div>

              <NavigationBar />


                <p id="footer">

                  Application Demo CSC309 Fall 2016 @ University Of Toronto.

                </p>

            </div>
        );
    }
}
