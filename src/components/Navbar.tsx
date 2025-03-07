import React from "react";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo or Title */}
          <h1 className="navbar-title">My Applications</h1>
  
          {/* Navigation Links */}
          <ul className="navbar-links">
            <li>
              <a href="#" className="navbar-link">
                Dad Joke Generator
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  