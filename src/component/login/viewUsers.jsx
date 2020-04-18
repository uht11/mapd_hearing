import React from 'react';
import axios from 'axios';
import loginImg from "../../logo.png";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import httpRequests from '../../httpRequests.js';
import {validatePassword , validateUser} from "./validate";
export class viewUsers extends React.Component {
  
    constructor(props){
        super(props);
        this.state = {
            username : "",
            password : "",
            isLoggedIn : "false"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
        this.setState({
             [e.target.name]: e.target.value
         });
 
     }
     //handling submit and sending request
     handleSubmit(e){
        if(validateUser(this.state.username)==true && validatePassword(this.state.password)==true){
        axios.get('http://3.21.171.11/test.php?username='+this.state.username+'&password='+this.state.password+'&type=login')
        .then( response => {
           // console.log(response);console.log(this.state);
            if (response.data == 1) {
              this.handleSuccessfulAuth(response.data);
              this.setState({ isLoggedIn : "true" })
            }
            else{

                alert('Invalid entry, please try again')
            }
          })
          .catch(error => {
            console.log("login error", error);
          });

        }
     }
     handleSuccessfulAuth(data) {
        
        this.props.history.push("/home");
      }

 

    
    render(){
        return(
        <Container fluid={false}>
        <Row className="base-container">
            <div className="tableWrapper">
            <div class="table-users">
   <div class="header">Registered Users</div>
   
   <table cellspacing="0">
      <tr>
         <th>Username</th>
         <th>Email</th>
         <th>Phone</th>
         <th width="230">Comments</th>
      </tr>

      <tr>
         <td>Jane Doe</td>
         <td>jane.doe@foo.com</td>
         <td>01 800 2000</td>
         <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </td>
      </tr>

      <tr>
         <td>John Doe</td>
         <td>john.doe@foo.com</td>
         <td>01 800 2000</td>
         <td>Blanditiis, aliquid numquam iure voluptatibus ut maiores explicabo ducimus neque, nesciunt rerum perferendis, inventore.</td>
      </tr>

      <tr>
         <td>Jane Smith</td>
         <td>jane.smith@foo.com</td>
         <td>01 800 2000</td>
         <td> Culpa praesentium unde pariatur fugit eos recusandae voluptas.</td>
      </tr>
      
      <tr>
         <td>John Smith</td>
         <td>john.smith@foo.com</td>
         <td>01 800 2000</td>
         <td>Aut voluptatum accusantium, eveniet, sapiente quaerat adipisci consequatur maxime temporibus quas, dolorem impedit.</td>
      </tr>
   </table>
</div>
            </div>        
        </Row>
        </Container>);
    }

}