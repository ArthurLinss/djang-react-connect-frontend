import { FaBars, FaHome, FaTimes, FaHorseHead} from "react-icons/fa";
import {useRef} from "react";



import 'bootstrap/dist/css/bootstrap.min.css'

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navibar2() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header>
            <h3> <FaHorseHead/> </h3>
            <nav class="top-bar fixed" ref={navRef}>
                <a hre f="/#"> Home </a>
                <a href="/#"> My Work </a>
                <a href="/#"> Blog </a>
                <a href="/#"> About Me </a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}


function Navibar(){
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home"> <FaHome/> </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="navbar-fixed-top">
        <Nav.Link href="#features">Areas</Nav.Link>
        <Nav.Link href="#pricing">Blog</Nav.Link>
        <NavDropdown title="More" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">About Me</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2">Contact</NavDropdown.Item>
          
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">Help</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Thanks
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
  }


export default Navibar; 