import React, { Component } from 'react';
import { NavBar } from 'react-bootstrap';

class NavBar extends Component{
  constructor(){
    super();
  }

  render(){
    <NavBar>
      <Navbar.Brand>
        <Navbar.Header>
        </NavBar.Header>
      </NavBar.Brand>

      <Nav>
        <NavItem eventKey={1} href="#">Messages</NavIem>
        <NavDropdown eventKey={2} id = "basic-nav-dropdown" title="Actions">
          <MenuItem>Add Listing</MenuItem>
          <MenuItem>View Requests</MenuItem>
          <MenuItem>Profile</MenuItem>
        </NavDropdown>
        <NavBar.Form pullLeft>
          <FormGroup>
            <FormControl type="text" placeholder="Search"/>
          </Form Group>
          <Button type="submit"> Submit </Button>
        </NavBar.Form>
        <NavItem eventKey={3} href="#"> Log Out <NavItem>
      </Nav>
    </NavBar>
  }
}

export default NavBar;
