import React,{useEffect,useMemo,useRef,useState} from "react";
import { Navbar, Nav, NavDropdown, Image ,Container,Row} from "react-bootstrap";
import logowhite from "../assets/img/logowhite.png";
import logored from "../assets/img/logored.png";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import "../style/NavBar.css";
import {withRouter, Link} from 'react-router-dom'
import SmSearchBar from "./SmSearchBar";
import SearchBar from "./SearchBar";
import useOutsideClick from './useOutsideClick'




function NavBar({history}) {
  const [searchActive, setSearchActive] = useState(false)
  const ref = useRef()


  const logo = useMemo(() => history.location.pathname ==='/' ? logowhite : logored
  , [history.location.pathname])

  const navbarClass = useMemo(() => history.location.pathname ==='/' ? "NavBar" : "NavBar NavBar-white"
  , [history.location.pathname])


  const links = useMemo(() => {
    return history.location.pathname ==='/search' && !searchActive ? <SmSearchBar setSearchActive={setSearchActive}/> :
    <Nav className="ml-auto">
    <Link to="/search" ><Nav.Link href="#home" className="NavBar__link active">Place to stay</Nav.Link></Link>
     <Nav.Link href="#link" className="NavBar__link">Experiences</Nav.Link>
     <Nav.Link href="#link" className="NavBar__link">Online Experiences</Nav.Link>

     </Nav>

  }, [history.location.pathname,searchActive])


  useOutsideClick(ref, () => {
    if(searchActive) setSearchActive(false)
  });


  return (
    <>
    <Navbar  expand="lg" className={navbarClass}>
          <Container>

      <Navbar.Brand href="#home">
        <Link to="/"><Image src={logo} className="logo" rounded /></Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
   {links}
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
     
      </Container>
      {searchActive && <div ref={ref} className="NavBar__search-box d-block ml-auto mx-auto"> <SearchBar history={history}/>
      </div> }
      
     

    </Navbar>
     
 
           
           </>
  );
}

export default withRouter(NavBar);
