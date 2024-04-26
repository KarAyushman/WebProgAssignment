import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Logo from './../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
    <NavLink className="logo" exact to="/" activeClassName="active">
        <img src={Logo} alt="" className="navbar-logo" />
    </NavLink>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="hamburger"></div>
      </div>
      <ul className="menu pata">
        <li>
          <NavLink className="navbar-item" exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-item" to="/articles" activeClassName="active">
            Articles
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-item" to="/assess" activeClassName="active">
            Assessment
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-item" to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>

        </ul>
        <ul className='menu'>
        <li>
          <NavLink className="navbar-item login-menu" to="/login" activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-item login-menu" to="/register" activeClassName="active">
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
