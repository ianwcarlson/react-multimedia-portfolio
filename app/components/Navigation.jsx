import React from 'react';
import {Navbar, Nav, NavBrand, NavDropdown, NavItem, MenuItem} from 'react-bootstrap';
//import {Nav} from 'react-bootstrap';
//import {NavItem} from 'react-bootstrap';

class Navigation extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Navbar inverse toggleNavKey={0}>
                <NavBrand>Ian W Carlson</NavBrand>
                <Nav right eventKey={0}> {/* This is the eventKey referenced */}
                    <NavItem eventKey={1} href="#">Link</NavItem>
                    <NavItem eventKey={2} href="#">Link</NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="collapsible-navbar-dropdown">
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another action</MenuItem>
                        <MenuItem eventKey="3">Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="4">Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
}

export default Navigation;