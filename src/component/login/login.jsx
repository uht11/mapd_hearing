import React from 'react';
import axios from 'axios';
import loginImg from "../../logo.png";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
export class Login extends React.Component {
  
    handleAdd(e) {
        this.setState({
             [e.target.name]: e.target.value
         });
 
     }
     handleSubmit(e){



        //axios.get('http://3.21.171.11/test.php', {uid : "1", upass: "12345"})
        //.then(response => { console.log(response)})
         //console.log(this.state);
         

         
     }


    constructor(props){
        super(props);
        this.state = {
            username : "",
            password : ""
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                <Input onChange={this.handleAdd} type="username" name="username" id="exampleusername" placeholder="Username" />
            </FormGroup>
            {' '}
            <FormGroup>
                <Label for="examplePassword" hidden>Password</Label>
                <Input onChange={this.handleAdd} type="password" name="password" id="examplePassword" placeholder="Password" />
            </FormGroup>
            {' '}
            <Button onClick={this.handleSubmit} color="primary" size="md" block>Sign in</Button>
            </Form>  
            </div>        
        </Row>
        </Container>);
    }

}