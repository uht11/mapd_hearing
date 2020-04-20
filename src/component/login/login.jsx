import React from 'react';
import axios from 'axios';
import loginImg from "../../logo.png";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {validatePassword , validateUser} from "./validate";
export class Login extends React.Component {
  
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
            <div className="formwrapper">
            <img src={loginImg}></img>
            <Form>
            <FormGroup>
                <Label for="exampleusername" hidden>Username</Label>
                <Input onChange={this.handleChange} type="username" name="username" id="exampleusername" placeholder="Username" />
            </FormGroup>
            {' '}
            <FormGroup>
                <Label for="examplePassword" hidden>Password</Label>
                <Input onChange={this.handleChange} type="password" name="password" id="examplePassword" placeholder="Password" />
            </FormGroup>
            {' '}
            <Button onClick={this.handleSubmit} color="primary" size="md" block>Sign in</Button>
            </Form>  
            </div>        
        </Row>
        </Container>);
    }

}