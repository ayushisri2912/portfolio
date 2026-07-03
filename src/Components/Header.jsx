import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="logo">
          PORTFOLIO<span>.</span>
        </div>

        <ul className={menuOpen ? "active" : ""}>
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </div>
      </nav>
    </header>
  );
};

export default Header;