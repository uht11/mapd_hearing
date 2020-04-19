import React from 'react';
import axios from 'axios';
import loginImg from "../../logo.png";
import * as myhttpRequests from "../../httpRequests"; 
import {validatePassword , validateUser, validateEmail} from "./validate";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
export class Register extends React.Component {
   
    handleAdd(e) {
        this.setState({
             [e.target.name]: e.target.value
         });
         
     }
     handleSubmit(e){
        if(validateEmail(this.state.email) == false){alert('Please Enter a Valid Email Address'); return;}
        if(validateUser(this.state.username)==true && validatePassword(this.state.password)==true){
        axios.get('http://3.21.171.11/test.php?username='+this.state.username+'&password='+this.state.password+'&email='+this.state.email+'&type=registration')
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
            test : "",fetchedData:null,
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
//------------------------------------------------------------------------
    componentDidMount(){
        var self=this // we are storing the reference of "this" in a varible called self because once you enter into fetch function the keyword "this" refers to that.
        myhttpRequests.fetchData().then(function(result) {
            console.log(Object.values(result)) // Object.values(object) returns the values of a javascript object(JSON) as an array. if you want the keys, you use Object.keys(result)
            // here we are using self to refer the state of this class
            self.setState({fetchedData:Object.values(result)})
        })
    }
//------------------------------------------------------------------------
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
        <Row>
            {/* In next line I have used the shorthand if else to check if the state.fetchedData is null which is the default. However, in componentDidmount lifecycle method we get the data and set the state but since the render function is called twice, the next line is true for second call and therefore our purpose is served */}
            {this.state.fetchedData!=null?this.state.fetchedData.map((element)=><p>{element.user_id}</p>):null}
        </Row>
        </Container>);
    }

}