import React from 'react';
import './navbar.scss';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    //   UncontrolledDropdown,
    //   DropdownToggle,
    //   DropdownMenu,
    //   DropdownItem 
} from 'reactstrap';
import {
    NavLink as RRNavLink,
} from "react-router-dom";

export default class NavbarMenu extends React.Component {
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
    render() {
        return (
            <div>
                <Navbar className="NavbarMenu" color="" light expand="md">
                    <NavbarBrand className="Brand" href="/">TravelApp</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse className="Collapse" isOpen={this.state.isOpen} navbar>
                        <Nav className="Nav ml-auto" navbar>
                            <NavItem className="NavItem">
                                <NavLink className="ItemLink"
                                    tag={RRNavLink}
                                    activeStyle={{ color: "yellow" }}
                                    to="/travellers">Travellers</NavLink>
                            </NavItem>
                            <NavItem className="NavItem">
                                <NavLink className="ItemLink"
                                    tag={RRNavLink}
                                    activeStyle={{ color: "yellow" }}
                                    to="/contacts">Contacts</NavLink>
                            </NavItem>
                            {/* <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem> */}
                            {/* <UncontrolledDropdown nav inNavbar>
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
              </UncontrolledDropdown> */}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}