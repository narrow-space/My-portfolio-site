import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Menubar.css";
const Menubar = () => {
  return (
    <div fixed="top" id="Home" className="nav-item">
      <Navbar
        
        collapseOnSelect
        expand="lg"
        bg=""
        variant="dark"
      >
        <Container>
          <Navbar.Brand
            style={{ "font-family": "'Roboto Mono', monospace" }}
            className="fs-3"
            href="#home"
          >
            IMRAN <span style={{ color: "red" }}>HASAN</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <ul className="ms-auto d-md-flex text-center">
             <a className="text-decoration-none" href="#Home"><li>Home</li></a>
              <a className="text-decoration-none" href="#Projects"><li>Projects</li></a>
              <a className="text-decoration-none" href=""><li>About Me</li></a>
             <a className="text-decoration-none" href=""> <li>Services</li></a>
            <a className="text-decoration-none" href="">  <li>Review</li></a>
              
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;
