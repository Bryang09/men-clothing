import React, { Component } from "react";

import Nav from "../../Nav/Nav";

// import Hero from "./Hero/Hero";

import Hero from "../Shared/Container/Hero/Hero";
import Container from "../Shared/Container/Container";
import Footer from "../../Footer/Footer";

class Wallets extends Component {
  render() {
    const { data } = this.props;

    const Data = data.filter(res => res.type === "wallets");

    const title = "Wallets for all occations";

    return (
      <div className="Wallets">
        <Nav />
        <Hero bgClass={`walletsHero`} />
        <Container title={title} data={Data} />
        <Footer />
      </div>
    );
  }
}

export default Wallets;
