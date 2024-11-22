"use client"
import React, { useState } from 'react';
import './Navbar.css';
import Link from 'next/link';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Blog App</div>
      <ul className="navbar-links">
        <li><Link href="/">Home</Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#blogs">Blogs</a></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
