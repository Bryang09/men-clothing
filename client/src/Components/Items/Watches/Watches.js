import React, { Component } from "react";

import Nav from "../../Nav/Nav";

// import Hero from "./Hero/Hero";

import Hero from "../Shared/Container/Hero/Hero";
import Container from "../Shared/Container/Container";
import Footer from "../../Footer/Footer";

class Watches extends Component {
  render() {
    const { data } = this.props;

    const Data = data.filter(res => res.type === "watches");

    const title = "Watches for all occations";
    console.log(Data);

    return (
      <div className="Watches">
        <Nav />
        <Hero bgClass={`watchesHero`} />
        <Container title={title} data={Data} />
        <Footer />
      </div>
    );
  }
}

export default Watches;
