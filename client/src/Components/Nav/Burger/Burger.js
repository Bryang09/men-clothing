import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./Burger.scss";

class Burger extends Component {
  state = {
    burgerExtended: false
  };

  onExtended = () => {
    this.setState({ burgerExtended: !this.state.burgerExtended });
  };
  render() {
    const { burgerExtended } = this.state;
    return (
      <div className="Burger">
        <div className="BurgerButton" onClick={this.onExtended}>
          <div
            className="line line1"
            style={
              burgerExtended
                ? { transform: `rotate(45deg) translate(0, 5px)` }
                : null
            }
          />
          <div
            className="line line2"
            style={burgerExtended ? { display: "none" } : null}
          />
          <div
            className="line line3"
            style={
              burgerExtended
                ? { transform: `rotate(-45deg) translate(-1px, -6px)` }
                : null
            }
          />
        </div>

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
      </div>
    );
  }
}

export default Burger;
