import React from "react";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import logo from "../assets/img/logowhite.png";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import "../style/NavBar.css";

function NavBar() {
  return (
    <Navbar  expand="lg" className="NavBar">
      <Navbar.Brand href="#home">
        <Image src={logo} className="logo" rounded />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
          <Nav.Link href="#home" className="NavBar__link active">Place to stay</Nav.Link>
          <Nav.Link href="#link" className="NavBar__link">Experiences</Nav.Link>
          <Nav.Link href="#link" className="NavBar__link">Online Experiences</Nav.Link>

          </Nav>
        <Nav className="ml-auto NavBar__right-menu">
          <Nav.Link className="NavBar__right-menu" href="#link">Become a host</Nav.Link>
          <NavDropdown title={<span className="NavBar__drop-title"><MenuIcon/> <AccountCircleIcon/></span>} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
