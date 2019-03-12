import React, { Component } from "react";

import "./Burger.scss";

import Button from "./Button/Button";
import Nav from "./Nav/Nav";

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
        <Button burgerExtended={burgerExtended} extend={this.onExtended} />
        <Nav burgerExtended={burgerExtended} />
      </div>
    );
  }
}

export default Burger;
