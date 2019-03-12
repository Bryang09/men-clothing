import React from "react";

import { Link } from "react-router-dom";

const Nav = props => {
  const { burgerExtended } = props;
  return (
    <div
      className="burgerNav"
      style={burgerExtended ? { display: "flex" } : { display: "none" }}
    >
      <h2>
        <Link to="/">Bryan's Fashion</Link>
      </h2>
      <h3>
        <Link to="/jackets">Jackets</Link>
      </h3>
      <h3>
        <Link to="/pants">Pants</Link>
      </h3>
      <h3>
        <Link to="/shirts">Shirts</Link>
      </h3>
      <h3>
        <Link to="/shoes">Shoes</Link>
      </h3>
      <h3>
        <Link to="/watches">Watches</Link>
      </h3>
      <h3>
        <Link to="/wallets">Wallets</Link>
      </h3>
    </div>
  );
};

export default Nav;
