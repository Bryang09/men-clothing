import React, { Component } from "react";

import Nav from "../../Nav/Nav";

// import Hero from "./Hero/Hero";

import Hero from "../Shared/Container/Hero/Hero";
import Container from "../Shared/Container/Container";
import Footer from "../../Footer/Footer";

class Shirts extends Component {
  render() {
    const { data } = this.props;

    const Data = data.filter(res => res.type === "shirt");

    const title = "Shirts for all occations";
    console.log(Data);

    return (
      <div className="Shirts">
        <Nav />
        <Hero bgClass={`shirtHero`} />
        <Container title={title} data={Data} />
        <Footer />
      </div>
    );
  }
}

export default Shirts;
