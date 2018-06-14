import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
    import { Link } from 'react-router-dom'

class NavbarContainer extends Component 
{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render() 
    {
        return (
            <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Flight Management</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
              
                <NavLink tag={Link} to="/flights">
                Flights
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/addFlight">
                New Flight
                </NavLink>
              
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
        );
    }
}


export default NavbarContainer;