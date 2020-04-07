import axios from 'axios';

// uses the data to redirect user to main page or gives an error
function setData(data){
    var returnData = data;
    // success 
    if(returnData == 1){

    }
    else{
        alert('Login Failed');
    }
}



/*
axios.get('http://3.21.171.11/test.php?uid=1&upass=12345&type=login')
.then(response => { console.log(response)})
 console.log(this.state);
 */

export function logIn(userName, Password) {
    
    axios.get('http://3.21.171.11/test.php?username='+userName+'&password='+Password+'&type=login').then(response => { console.log(response);
    
    //sets the data from the response
    setData(response.data);
    }, 
    (error) => {
        console.log(error);
      });
    
  }
 




  export default function(uid, upass, type){

    if(type == "login"){ 
        
        logIn(uid, upass)
        
    }
    
}