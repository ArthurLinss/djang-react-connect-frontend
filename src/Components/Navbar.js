import { FaBars, FaHome, FaTimes, FaHorseHead} from "react-icons/fa";
import {useRef} from "react";
import {Route, Routes} from "react-router-dom"
import {Link} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AboutMe from "../About.js";

function Navibar(){



    return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/"> <FaHome/> </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="navbar-fixed-top">
      <NavDropdown title="Areas" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/ukraine">Ukraine</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2">2ndWW</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#pricing">Blog</Nav.Link>
        <NavDropdown title="More" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/about">About Me</NavDropdown.Item>
          <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#add_item">Add</NavDropdown.Item>
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
    );
  }


export default Navibar; 