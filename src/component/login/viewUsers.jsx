
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import loginImg from "../../logo.png";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import httpRequests from '../../httpRequests.js';
import {validatePassword , validateUser, getData} from "./validate";
import { useState } from 'react';
export class viewUsers extends React.Component {
    

  


    constructor(props){
   
        super(props);
        this.state = {
            username : ""
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        

      

      console.log(getData());
      
    } // end of constructor


    handleChange(e) {
        this.setState({
             [e.target.name]: e.target.value
         });
 
     }

     //handling submit and sending request
     handleSubmit(e){
      
        
     }
     handleSuccessfulAuth(data) {}







     createTable = () => {
      let table = []
  
      // Outer loop to create parent
      for (let i = 0; i < 5; i++) {
        let children = []
        //Inner loop to create children
        for (let j = 0; j < 4; j++) {
          children.push(<td>{}</td>)
        }
        //Create the parent and add the children
        table.push(<tr>{children}</tr>)
      }
      return table
    }

     


     //start render
    render(){
       const { userArr } = this.state
        return(
         <Container fluid={false}>

         <div className="users">
         
       </div>
        
           
        
        <Row className="base-container">
            <div className="tableWrapper">
            <div class="table-users">
   <div class="header">Registered Users</div>
   
   <table cellspacing="0">

      <tr>
         <th>Username</th>
         <th>Password</th>
         <th>Email</th>
         <th width="100">Delete</th>
      </tr>
     {this.createTable()}

   </table>
</div>
            </div>        
        
        </Row>
        </Container>);
    }

}

