import React, { Component } from 'react';
import { Navbar,NavItem,FormGroup,FormControl,Button,
    Nav, NavDropdown,MenuItem,
 } from 'react-bootstrap';

class NavigationBar extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"> Share Goods </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">Messages</NavItem>
          <NavDropdown eventKey={2} id="basic-nav-dropdown" title="Actions">
            <MenuItem>Add Listing</MenuItem>
            <MenuItem>View Requests</MenuItem>
            <MenuItem>Profile</MenuItem>
          </NavDropdown>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search"/>
            </FormGroup>
            <Button type="submit"> Submit </Button>
          </Navbar.Form>
          <NavItem eventKey={3} href="#"> Log Out </NavItem>
          </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
