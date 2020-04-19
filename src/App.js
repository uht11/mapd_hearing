import {Login, Register, viewUsers} from './component/login/';
import {Home, Manuu} from './component/userPages/';
import { BrowserRouter, Router, Route} from 'react-router-dom'
import React, { useState } from 'react';
import { logIn } from './httpRequests.js';
const App = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Manuu/> 
      <BrowserRouter>
        <div className="Container">
          <Route exact path='/' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register}/>
          <Route path='/home' component={Home}/>
          <Route path='/viewUsers' component={viewUsers}/>
        </div>
      </BrowserRouter>

    </div>
  );
}
export default App;
