import React from 'react';
import axios from 'axios';
import loginImg from "../../logo.png";
import {validatePassword , validateUser} from "./validate";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
export class Register extends React.Component {
   
    handleAdd(e) {
        this.setState({
             [e.target.name]: e.target.value
         });
 
     }
     handleSubmit(e){

        if(validateUser(this.state.username)==true && validatePassword(this.state.password)==true){
        axios.get('http://3.21.171.11/test.php?username='+this.state.username+'&password='+this.state.password+'&type=registration')
        .then( response => {
        // console.log(response);console.log(this.state);
            if (response.data == 1) {
            alert('New user registration successful');
            
            }
            else { alert('Registration unsuccessful, please double check your input')}
        })
        .catch(error => {
            console.log("login error", error);
        });

         
     }
    }


    constructor(props){
        super(props);
        this.state = {
            username : "",
            password : "",
            email : "",
            test : ""
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render(){
        return(
        <Container fluid={false}>
        <Row className="base-container">
            <div className="formwrapper">
            <img alt='logo' src={loginImg}></img>
            <Form>
            <FormGroup>
                <Label for="exampleusername" hidden>Username</Label>
                <Input onChange={this.handleAdd} type="username" name="username" id="exampleusername" placeholder="Username" />
            </FormGroup>
            {' '}
            <FormGroup>
                <Label for="examplePassword" hidden>Password</Label>
                <Input onChange={this.handleAdd} type="password" name="password" id="examplePassword" placeholder="Password" />
            </FormGroup>
            {' '}
            <FormGroup>
                <Label for="exampleEmail" hidden>Email</Label>
                <Input onChange={this.handleAdd} type="email" name="email" id="exampleEmail" placeholder="Email" />
            </FormGroup>
            <Button onClick={this.handleSubmit} color="primary" size="md" block>Register</Button>
            </Form>  
            </div>        
        </Row>
        </Container>);
    }

}