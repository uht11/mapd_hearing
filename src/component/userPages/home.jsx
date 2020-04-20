import React from 'react';
import axios from 'axios';
import loginImg from "../../fromLogo.svg";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
export class Home extends React.Component {
   
    handleAdd(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
         
     }
     handleSubmit(e){
       
    }
    constructor(props){
        super(props);
        this.state = {

            field1 : "",
            field2 : "",
            field3 : "",
            field4 : "",
            field5 : "",
            field6 : "",
            test : "",fetchedData:null,
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
   render(){
        return(
        <Container fluid={false}>
        <Row className="base-container"><h1>Welcome </h1>
            <div className="formwrapperUser">
            <img alt='logo' src={loginImg}></img>
            <Form>
            <FormGroup>
                <Label for="field1" hidden>field1</Label>
                <Input onChange={this.handleAdd} type="field1" name="field1" id="field1" placeholder="field1" />
            </FormGroup>
            {' '}
            <FormGroup>
                <Label for="field2" hidden>field2</Label>
                <Input onChange={this.handleAdd} type="field2" name="field2" id="field2" placeholder="field2" />
            </FormGroup>
            {' '}
            <FormGroup>
                <Label for="field3" hidden>field3</Label>
                <Input onChange={this.handleAdd} type="field3" name="field3" id="field3" placeholder="field3" />
            </FormGroup>
            {' '}
            <FormGroup>
                <Label for="field4" hidden>field4</Label>
                <Input onChange={this.handleAdd} type="field4" name="field4" id="field4" placeholder="field4" />
            </FormGroup>
            {' '}
            <FormGroup>
                <Label for="field5" hidden>field5</Label>
                <Input onChange={this.handleAdd} type="field5" name="field5" id="field5" placeholder="field5" />
            </FormGroup>
            {' '}
            <FormGroup>
                <Label for="field6" hidden>field6</Label>
                <Input onChange={this.handleAdd} type="field6" name="field6" id="field6" placeholder="field6" />
            </FormGroup>
            <Button onClick={this.handleSubmit} color="primary" size="md" block>Continue</Button>
            </Form>  
            </div>        
        </Row>
     
        </Container>);
    }

}