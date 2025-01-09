import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import menuButton from "./greymenu_processed.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference to the menu container

  // Toggle menu visibility
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="nav" ref={menuRef}>
      {/* Corner Title */}
      <div className="corner-title">CL</div>

      {/* Menu Button */}
      <img
        className="menu-btn"
        src={menuButton}
        alt="Menu Button"
        onClick={toggleMenu}
      />

      {/* Navigation Links */}
      <ul className={`menu-items ${isMenuOpen ? "active" : ""}`}>
    <li>
      <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
    </li>
    <li>
      <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
    </li>
    <li>
      <a href="#Projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
    </li>
    <li>
      <a href="/Resume.pdf" target = "_blank" rel="noopener noreferrer" > Resume</a>
    </li>
    <li>
      <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
    </li>
      </ul>
    </nav>
  );
}
