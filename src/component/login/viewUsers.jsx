
import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import * as myhttpRequests from "../../httpRequests"; 
export class viewUsers extends React.Component {
    

  


    constructor(props){
   
        super(props);
        this.state = {
            username : ""
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        

      

      
      
    } // end of constructor
    
    componentDidMount(){
      var self=this // we are storing the reference of "this" in a varible called self because once you enter into fetch function the keyword "this" refers to that.
      myhttpRequests.fetchData().then(function(result) {
          //console.log(Object.values(result)) Object.values(object) returns the values of a javascript object(JSON) as an array. if you want the keys, you use Object.keys(result)
          // here we are using self to refer the state of this class
          self.setState({fetchedData:Object.values(result)})
      })
  }

    handleChange(e) {
        this.setState({
             [e.target.name]: e.target.value
         });
 
     }

     //handling submit and sending request
     handleSubmit(e){
      
        
     }
     handleSuccessfulAuth(data) {}



     deleteUser(e){

      fetch("http://3.21.171.11/test.php?username="+e.target.name+"&type=delete")
      .then( response => {
        //console.log(response);//console.log(this.state);
         alert('User removed from server!'); 
         window.location.reload(false);
      
      }).catch(error => console.error('Error: from Json Handler', error));
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
      {this.state.fetchedData!=null?this.state.fetchedData.map((element) => 0 != element.length?( <tr><td>{element.user_id}</td><td>{element.password}</td><td>{element.Email}</td><td><button name={element.user_id} onClick={this.deleteUser.bind()}  class='delete'>Delete</button></td></tr>):null):null}
      
   </table>
</div>
            </div>        
        
        </Row>
        
        </Container>);
    }

}

