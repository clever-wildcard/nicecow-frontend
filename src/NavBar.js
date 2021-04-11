import React, { Component } from 'react'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";
import { Link } from 'react-router-dom'

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {isOpen:false}
        this.toggle = this.toggle.bind(this)
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return <Navbar color="light" light expand="md">
            <NavbarBrand tag={Link} to="/">Feed</NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        {/*<NavLink href="/:id">Me</NavLink>*/}
                        {/*<NavLink tag={Link}>Me</NavLink>*/}
                        <NavbarBrand tag={Link} to="/:id">Me</NavbarBrand>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    }
}

export default NavBar