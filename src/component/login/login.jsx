import React from 'react';
import loginImg from "../../logo.png";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
export class Login extends React.Component {
    constructor(props){
        super(props);
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
                <Input type="username" name="username" id="exampleusername" placeholder="Username" />
            </FormGroup>
            {' '}
            <FormGroup>
                <Label for="examplePassword" hidden>Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Password" />
            </FormGroup>
            {' '}
            <Button color="primary" size="md" block>Sing in</Button>
            </Form>  
            </div>        
        </Row>
        </Container>);
    }

}