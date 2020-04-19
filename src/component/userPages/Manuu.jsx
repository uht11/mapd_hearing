import React from 'react';
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

export class Manuu extends React.Component {

    constructor(props){
        super(props);
        

};
render(){
    return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/login">MAPD</NavbarBrand>
        <NavbarToggler  />
        <Collapse  navbar>
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
                <NavItem>
                  <NavLink href='/viewUsers'>View User List</NavLink>
                </NavItem>
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


    </div>
  );
}
}