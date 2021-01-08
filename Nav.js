import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <div>
        
        <Link to="/Home">
          <span><button style={{ color: "white", backgroundColor: "grey" }}>Home</button></span>
          </Link>
        <Link to="/about">
          <span><button style={{ color: "white", backgroundColor: "grey" }}>About Us</button></span>
        </Link>
        <Link to="/contact">
          <span><button style={{ color: "white", backgroundColor: "grey" }}>Contact Us</button></span>
        </Link>
        <Link to="/User">
          <ul>
            <ul></ul>
          <button button style={{ color: "blue", backgroundColor: "white" }}>Click this section to register as a Pharmacy</button>
          </ul>
        </Link>
      </div>
    </nav>
  );
}