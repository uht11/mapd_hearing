import {Login, Register} from './component/login/';
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
          <Route exact path='/' component={Login} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register}/>
          <Route path='/home' component={Home}/>
        </div>
      </BrowserRouter>

    </div>
  );
}
export default App;
