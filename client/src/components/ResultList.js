import React from "react";
import Detail from "../pages/Detail";
import {Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import "../pages/style.css"
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { relative } from "path";


class ResultList extends Component {
 
  render() {
 
  return (
    <List className="list-group">
      {this.props.results.map(result => (
        
        <ListItem style={{ float: "left"}} className="list-group-item" key={result.id}>
        <div style={{float:"left"}}>
        <strong>
        <span id="title">{result.volumeInfo.title} by {result.volumeInfo.authors}</span>
        </strong>
        </div>
        <a href={result.volumeInfo.previewLink} target="_blank">
        <button type="button" className="btn btn-primary mt-3 bttn">View</button>
        </a>
        <button type="button"  id={result.id} onClick={this.props.saveAction} className="btn btn-primary mt-3 bttn">Save</button>
        <br></br>
        <br></br>
        <Row>
        
        <Col size="md-2">
        
        <img alt={result.volumeInfo.title} className="img-fluid" src={result.volumeInfo.imageLinks.smallThumbnail} />
        </Col>
        <Col size="md-10">
        <span id="synopsis">{result.volumeInfo.description}</span>    
       
        </Col>
         
        </Row>
      </ListItem>
      ))}
    </List>
  );
}
}
export default ResultList;
