import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-flex">
        <Link to="/" className="navbar-brand" style={{ color: "white" }}>LEGENDARY SECURITY</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportContent" 
        aria-controls="navbarSupportContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row align-items-center">
          <li className="nav-item" style={{ marginRight: "20px" }}>
            <Link to="/" className="nav-link active" style={{ color: "white" }}>Home</Link>
          </li>
          <li className="nav-item" style={{ marginRight: "20px" }}>
            <Link to="/about" className="nav-link" style={{ color: "white" }}>About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" style={{ color: "white" }}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
