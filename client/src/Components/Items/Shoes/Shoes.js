import React, { Component } from "react";

import Nav from "../../Nav/Nav";

// import Hero from "./Hero/Hero";

import Hero from "../Shared/Container/Hero/Hero";
import Container from "../Shared/Container/Container";
import Footer from "../../Footer/Footer";

class Shoes extends Component {
  render() {
    const { data } = this.props;

    const Data = data.filter(res => res.type === "shoe");

    const title = "Shoes for all occations";

    return (
      <div className="Shoes">
        <Nav />
        <Hero bgClass={`shoesHero`} />
        <Container title={title} data={Data} />
        <Footer />
      </div>
    );
  }
}

export default Shoes;
