import React from 'react';
import NavigationBar from './navigation-bar';
import NotFoundPage from './not-found-page';
import ViewItem from './view-item';



export default class App extends React.Component {
    constructor(props) {
        super(props);

        // set states here

    }

    render() {
        return (
            <div>

              <ViewItem />

                <p id="footer">

                  Application Demo CSC309 Fall 2016 @ University Of Toronto.

                </p>

            </div>
        );
    }
}
