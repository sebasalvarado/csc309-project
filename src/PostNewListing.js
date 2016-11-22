import React, { Component } from 'react';

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
      body: JSON.stringify({ownerID: this.state.id, item: this.state.item, returnDate: this.state.returnDate, description: this.state.descripton})
    });
    this.change(1);

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
    );
  }
}

export default PostNewListing;
