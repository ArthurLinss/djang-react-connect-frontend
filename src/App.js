import axios from "axios";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {Event} from "./Event.js"
import NavbarApp from "./navbarTest.js";
import FooterApp from "./footerTest.js";
import "./Styles/main.css"
import AboutMe from "./About.js"
import Contact from "./Contact.js"
import Ukraine from "./Ukraine.js"
import {BrowserRouter, Route, Routes} from 'react-router-dom';

let color1 = "#0f283a"; // #ffd700";

class App extends React.Component { 

  render() {

    return (
      
      <div    
        style={{
          backgroundColor: color1,
        }}
      >
      

        <NavbarApp/>
      
        <Routes>
        <Route path="/" element={<Ukraine />} />
        <Route path="/ukraine" element={<Ukraine />} />
      <Route path="/about" element={<AboutMe/>} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

      

        <FooterApp/>
      </div>
    );
  }
}

export default App;

