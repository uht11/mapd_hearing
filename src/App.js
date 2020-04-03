import {Login, Register} from './component/login/';
import { BrowserRouter, Router, Route} from 'react-router-dom'
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
const App = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/login">MAPD</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href='/login'>Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/register'>Registration</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Help</NavbarText>
        </Collapse>
      </Navbar>
      
      <BrowserRouter>
        <div className="Container">
          <Route exact path='/' component={Login} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register}/>
        </div>
      </BrowserRouter>

    </div>
  );
}
export default App;