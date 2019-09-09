import React from 'react';
import './navbar.scss';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import {
    NavLink as RRNavLink,
} from "react-router-dom";

    const NavbarMenu= ()=>{
        return (
            <div>
                <Navbar className="NavbarMenu" color="" light expand="md">
                    <NavbarBrand className="Brand">TravelApp</NavbarBrand>
                        <Nav className="Nav ml-auto" navbar>
                            <NavItem className="NavItem">
                                <NavLink className="ItemLink"
                                    tag={RRNavLink}
                                    exact
                                    activeStyle={{ color: "yellow" }}
                                    to="/">Travellers</NavLink>
                            </NavItem>
                            <NavItem className="NavItem">
                                <NavLink className="ItemLink"
                                    tag={RRNavLink}
                                    activeStyle={{ color: "yellow" }}
                                    to="/contacts">Contacts</NavLink>
                            </NavItem>
                        </Nav>
                </Navbar>
            </div>
        );
    }

export default  NavbarMenu