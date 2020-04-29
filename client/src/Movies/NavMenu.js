import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from "reactstrap"


const NavMenu = (props) => {

    // logout = () => {
    //     localStorage.removeItem("token");
    //     localStorage.clear();

    //     if (localStorage.getItem('token') === null) {
    //         this.props.history.push('/login');
    //     }
    // }

    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">{`</HTTPMovies>`}</NavbarBrand>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="/">Saved Movies</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/add-movie">Add Movie</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default NavMenu