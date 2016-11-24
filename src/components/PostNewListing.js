import React, { Component } from 'react';
import { Link } from 'react-router';
<<<<<<< HEAD
=======
import { Form, FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap';
>>>>>>> 60d589fb5dec52210895cdc861e756e4b5d3a7b8

class PostNewListing extends Component {

  constructor() {
    super();
    this.state = {id: '', firstName: '', lastName: '', email: '', item: '', returnDate: '', description: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key) {
    return function (event) {
      this.state[key] = event.target.value;
      this.setState(this.state);
    }
  }

  handleSubmit(event) {
    alert('form is created');
<<<<<<< HEAD
    /*
=======


>>>>>>> 60d589fb5dec52210895cdc861e756e4b5d3a7b8
    fetch('https://share-goods.herokuapp.com/users', {
      method: "GET"
    })
    .then((response) => response.json())
    .then((responseData) => {
      this.state['id'] = responseData[0].id;
      this.setState(this.state);
    })
    .done();

    fetch('https://share-goods.herokuapp.com/listings', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
<<<<<<< HEAD
      body: JSON.stringify({ownerID: this.state.id, item: this.state.item, returnDate: this.state.returnDate, description: this.state.descripton});
    });
    this.change(1);
    */
=======
      body: JSON.stringify({ownerID: this.state.id, item: this.state.item, returnDate: this.state.returnDate, description: this.state.descripton})
    });
    this.change(1);

>>>>>>> 60d589fb5dec52210895cdc861e756e4b5d3a7b8
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    console.log(this.state.email);
    console.log(this.state.item);
    console.log(this.state.returnDate);
    console.log(this.state.description);
    event.preventDefault();
  }

  render() {
    return (
<<<<<<< HEAD
      <form onSubmit={this.handleSubmit}>
        List your item:
        First Name:
        <input type="text" value={this.state.firstName} onChange={this.handleChange('firstName').bind(this)} />
        Last Name:
        <input type="text" value={this.state.lastName} onChange={this.handleChange('lastName').bind(this)} />
        Email:
        <input type="text" value={this.state.email} onChange={this.handleChange('email').bind(this)} />
        Item:
        <input type="text" value={this.state.item} onChange={this.handleChange('item').bind(this)} />
        Return Date:
        <input type="text" value={this.state.returnDate} onChange={this.handleChange('returnDate').bind(this)} />
        Description:
        <input type="text" value={this.state.description} onChange={this.handleChange('description').bind(this)} />

        <input type="submit" value="Submit" />
      </form>
=======
      <Form horizontal onSubmit={this.handleSubmit}>

      <FormGroup controlId="formHorizontalFN">
        <Col componentClass={ControlLabel} sm={2}>
          First Name
        </Col>
        <Col sm={5}>
          <FormControl type="text" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange('firstName').bind(this)}/>
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalLN">
        <Col componentClass={ControlLabel} sm={2}>
          Last Name
        </Col>
        <Col sm={5}>
          <FormControl type="text" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange('lastName').bind(this)}/>
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          Email
        </Col>
        <Col sm={5}>
          <FormControl type="email" value={this.state.email} placeholder="Email" onChange={this.handleChange('email').bind(this)}/>
        </Col>
      </FormGroup>

      <FormGroup controlId="formControlsSelect">
        <Col componentClass={ControlLabel} sm={2}>
          Category
        </Col>
        <Col sm={5}>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">select</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Outdoor Living">Outdoor Living</option>
            <option value="Health">Health</option>
            <option value="Beauty">Beauty</option>
            <option value="Electronics">Electronics</option>
            <option value="other">...</option>
          </FormControl>
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalItem">
        <Col componentClass={ControlLabel} sm={2}>
          Item
        </Col>
        <Col sm={5}>
          <FormControl type="text" value={this.state.item} placeholder="Item" onChange={this.handleChange('item').bind(this)}/>
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalRP">
        <Col componentClass={ControlLabel} sm={2}>
          Rental Price
        </Col>
        <Col sm={5}>
          <FormControl type="text" placeholder="Price" />
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalRD">
        <Col componentClass={ControlLabel} sm={2}>
          Return Date
        </Col>
        <Col sm={5}>
          <FormControl type="date" value={this.state.returnDate} placeholder="Return Date" onChange={this.handleChange('returnDate').bind(this)}/>
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalDesc">
        <Col componentClass={ControlLabel} sm={2}>
          Description
        </Col>
        <Col sm={5}>
          <FormControl type="text" componentClass="textarea" value={this.state.description} placeholder="Description" onChange={this.handleChange('description').bind(this)}/>
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalDesc">
        <Col componentClass={ControlLabel} sm={2}>
          Address
        </Col>
        <Col sm={5}>
          <FormControl type="address" placeholder="Location" />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button type="submit">
            Post
          </Button>
        </Col>
      </FormGroup>

      </Form>
>>>>>>> 60d589fb5dec52210895cdc861e756e4b5d3a7b8
    );
  }
}

export default PostNewListing;
