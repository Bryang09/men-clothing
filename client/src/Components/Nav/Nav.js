import React from "react";

import { NavLink, Link } from "react-router-dom";

import "./Nav.scss";

const Nav = props => {
  return (
    <div className="Nav">
      <div className="NavLogo">
        <div className="logo">
          <h3>
            <Link to="/">Fashion For Men</Link>
          </h3>
        </div>
      </div>

      <div className="Navigation">
        <NavLink to="/jackets" activeClassName="activeLink">
          <h4>Jackets</h4>
        </NavLink>
        <NavLink to="/pants" activeClassName="activeLink">
          <h4>Pants</h4>
        </NavLink>
        <NavLink to="/shirts" activeClassName="activeLink">
          <h4>Shirts</h4>
        </NavLink>
        <NavLink to="/shoes" activeClassName="activeLink">
          <h4>Shoes</h4>
        </NavLink>
        <NavLink to="/watches" activeClassName="activeLink">
          <h4>Watches</h4>
        </NavLink>
        <NavLink to="/wallets" activeClassName="activeLink">
          <h4>Wallets</h4>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
