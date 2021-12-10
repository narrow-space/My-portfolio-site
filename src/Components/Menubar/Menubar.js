import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Menubar.css";
const Menubar = () => {
  return (
    <div id="Home" className="nav-item ">
      <nav class=" navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand fs-2 ms-1" href="#">
            {" "}
            IMRAN <span style={{ color: "#DC143C" }}>HASAN</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav fs-5 ms-auto mb-2 mb-lg-0 me-5">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#services">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#Projects">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menubar;
