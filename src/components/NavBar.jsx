import React,{useEffect,useMemo,useRef,useState,useContext} from "react";
import { Navbar, Nav, NavDropdown, Image ,Container,Row,Modal,Button,InputGroup,FormControl} from "react-bootstrap";
import logowhite from "../assets/img/logowhite.png";
import logored from "../assets/img/logored.png";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import "../style/NavBar.css";
import {withRouter, Link} from 'react-router-dom'
import SmSearchBar from "./SmSearchBar";
import SearchBar from "./SearchBar";
import useOutsideClick from './useOutsideClick'
import ModalLogin from "./ModalLogin";
import AppContext from '../context/app-context'
import ModalSignUp from "./ModalSignUp";
import { unmountComponentAtNode } from "react-dom";





function NavBar({history}) {
  const [searchActive, setSearchActive] = useState(false)
  const {isAuth,doLogout,user} = useContext(AppContext)
  const [showLogin,setShowLogin] = useState(false)
  const [showSignUp,setShowSignUp] = useState(false)

  const reff = useRef()


  const logo = useMemo(() => history.location.pathname ==='/' ? logowhite : logored
  , [history.location.pathname])

  const navbarClass = useMemo(() => history.location.pathname ==='/' ? "NavBar" : "NavBar NavBar-white"
  , [history.location.pathname])


  useOutsideClick(reff, () => {
    if(searchActive) setSearchActive(false)
    if(!searchActive) setSearchActive(true)
  });

 const handleShowLogin = () =>{
    setShowLogin(!showLogin)
    
  }
  const links = useMemo(() => {
    return history.location.pathname ==='/search' && !searchActive ? <SmSearchBar setSearchActive={setSearchActive} searchActive={searchActive}/> :
    <Nav className="ml-auto">
    <Link to="/search" ><Nav.Link href="#home" className="NavBar__link active">Place to stay</Nav.Link></Link>
     <Nav.Link href="#link" className="NavBar__link">Experiences</Nav.Link>
     <Nav.Link href="#link" className="NavBar__link">Online Experiences</Nav.Link>

     </Nav>

  }, [history.location.pathname,searchActive])




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
            {!isAuth && <><NavDropdown.Item onClick={()=>setShowLogin(!showLogin)} href="#action/3.1">Login</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" onClick={()=>setShowSignUp(!showSignUp)}>
              Sign Up
            </NavDropdown.Item></>}
            {isAuth && <span className="ml-4">Hi {user && user.firstName}</span>}
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Host your home
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Help
            </NavDropdown.Item>
            {isAuth &&
            <NavDropdown.Item href="#action/3.4" onClick={()=>doLogout()}>
              Logout
            </NavDropdown.Item>}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
     
      </Container>
      {searchActive && <div reff={reff} className="NavBar__search-box d-block ml-auto mx-auto"> <SearchBar history={history}/>
      </div> }
      
     

    </Navbar>

    
     <ModalLogin handleShowLogin={handleShowLogin} show={showLogin}/>
     <ModalSignUp showSignUp={showSignUp} setShowSignUp={setShowSignUp}/>

 
           
           </>
  );
}

export default withRouter(NavBar);
