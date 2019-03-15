import React, { Component } from "react";

import Nav from "../../Nav/Nav";

// import Hero from "./Hero/Hero";

import Hero from "../Shared/Container/Hero/Hero";
import Container from "../Shared/Container/Container";
import Footer from "../../Footer/Footer";

class Jackets extends Component {
  render() {
    const { data } = this.props;

    const Data = data.filter(res => res.type === "jacket");

    const title = "Jackets for all occations";

    return (
      <div className="Jackets">
        <Nav />
        <Hero bgClass={`jacketHero`} />
        <Container title={title} data={Data} />
        <Footer />
      </div>
    );
  }
}

export default Jackets;
