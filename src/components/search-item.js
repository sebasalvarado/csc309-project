import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';

export default class SearchItem extends Component{
  constructor(){
    super();
  }

  render() {
    return (
  <Grid>
    <Row className="show-grid" id="row1">
      <Col md={12}> <h1 id="userItemTitle"> User Item Name </h1> </Col>
    </Row>

    <Row className="show-grid">
      <Col md={12}>
        <div className="medium-top-buffer"> </div>
      </Col>
    </Row>


    <Row className="show-grid" id="row2">
      <Col md={7}>
        <div id="userItemImage"> </div>
      </Col>
      <Col md={5}>
      <div id="itemDetails">
        <p id="itemDetailsHeader"> Item Details </p>
        <p id="itemDescription"> Item Description: </p>
        <p id="itemOriginalPrice"> Original Price: </p>
        <p id="itemCurrentCondition"> Current Condition: </p>
        <p id="itemRating"> Rating: </p>
        <p id="itemOtherInformation"> Other Information: </p>
      </div>
      </Col>
    </Row>

    <Row className="show-grid">
      <Col md={12}>
        <div className="small-top-buffer"> </div>
      </Col>
    </Row>

    <Row className="show-grid" id="row3">
      <Col md={7}>
        <div id="userOtherItems"> </div>
       </Col>
      <Col md={5}>
        <div id="map"> <p> Location: </p></div>
      </Col>
    </Row>

  </Grid>

     );
  }
}
