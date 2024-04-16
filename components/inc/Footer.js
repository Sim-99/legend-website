import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Information</h5>
            <p style={{ color: "white" }}>
              Phone: +1234567890 <br />
              Email: info@legendarysecurity.com <br />
              Address: 123 Main Street, City, Country
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" style={{ color: "white" }}>Home</Link></li>
              <li><Link to="/about" style={{ color: "white" }}>About</Link></li>
              <li><Link to="/contact" style={{ color: "white" }}>Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Social Media</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com" style={{ color: "white" }}>Facebook</a></li>
              <li><a href="https://twitter.com" style={{ color: "white" }}>Twitter</a></li>
              <li><a href="https://www.instagram.com" style={{ color: "white" }}>Instagram</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 text-center">
            <p style={{ color: "white" }}>&copy; {new Date().getFullYear()} Legendary Security. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
