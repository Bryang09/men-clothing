import React, { Component } from "react";

import Nav from "../../Nav/Nav";

// import Hero from "./Hero/Hero";

import Hero from "../Shared/Container/Hero/Hero";
import Container from "../Shared/Container/Container";
import Footer from "../../Footer/Footer";

class Pants extends Component {
  render() {
    const { data } = this.props;

    const Data = data.filter(res => res.type === "pants");

    const title = "Pants for all occations";
    console.log(Data);

    return (
      <div className="Pants">
        <Nav />
        <Hero bgClass={`pantsHero`} />
        <Container title={title} data={Data} />
        <Footer />
      </div>
    );
  }
}

export default Pants;
