import React, { Component } from "react";

import Hero from "./Hero/Hero";
import Section1 from "./Section1/Section1";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <Hero />
        <Section1 />
        <hr />
      </div>
    );
  }
}

export default Landing;
