import React, { Component } from 'react';
import { Link } from 'react-router';

import { Navbar,NavItem,FormGroup,FormControl,Button,
    Nav, NavDropdown,MenuItem,
 } from 'react-bootstrap';

import PostNewListing from './PostNewListing';

class NavigationBar extends Component{
  constructor(){
    super();
    this.state = {activeKey: 1};
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
      this.setState({activeKey: eventKey});
  }

  render(){
    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"> Share Goods </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav activeKey={this.state.activeKey} onSelect={this.handleSelect}>
          <NavItem eventKey={1} href="#">Messages</NavItem>
          <NavDropdown eventKey={2} id="basic-nav-dropdown" title="Actions">
            <MenuItem eventKey={2.1}>Add Listing</MenuItem>
            <MenuItem eventKey={2.2}>View Requests</MenuItem>
            <MenuItem eventKey={2.3}>Profile</MenuItem>
          </NavDropdown>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search"/>
            </FormGroup>
            <Button type="submit"> Submit </Button>
          </Navbar.Form>
          <NavItem eventKey={3} href="#"> Log Out </NavItem>
          </Nav>
          {this.state.activeKey == 2.1 ? <PostNewListing/> : null}
      </Navbar>
    );
  }
}

export default NavigationBar;
