import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <a href="#" className="logo">
        MATEIU SERGIU
      </a>

      <ul>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">PACER</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
