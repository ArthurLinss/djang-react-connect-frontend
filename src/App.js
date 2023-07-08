import React from "react";
import "react-vertical-timeline-component/style.min.css";
import NavbarApp from "./navbarTest.js";
import FooterApp from "./footerTest.js";
import "./Styles/main.css";
import AboutMe from "./About.js";
import Contact from "./Contact.js";
import Ukraine from "./Ukraine.js";
import Blog from "./Blog.js";
import Home from "./Home.js"
import WW2 from "./WW2.js";
import VietnamWar from "./VietnamWar.js"
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

let color1 = "#0f283a"; // #ffd700";

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: color1,
        }}
      >
        <NavbarApp />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ukraine" element={<Ukraine />} />
          <Route oath="/vietnamwar" element={<VietnamWar/>} />
          <Route path="/ww2" element={<WW2 />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <FooterApp />
      </div>
    );
  }
}

export default App;
