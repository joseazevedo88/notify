import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { AddNote } from './AddNote';

export class AppNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand style={{ marginLeft: '1em', marginRight: '0.2em' }}>
            <i className="far fa-sticky-note" /> Notify |
          </NavbarBrand>
          <NavbarBrand href="#">
            <AddNote addNote={this.props.addNote} />
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/joseazevedo88">
                José Azevedo
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
