import React, { Component } from "react";

import Hero from "./Hero/Hero";

import Section from "./Section/Section";

import { Content } from "./sectionContent/Content";

import "./Landing.scss";
import DividedSection from "./DividedSection/dividedSection";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

class Landing extends Component {
  state = {
    content: Content
  };

  render() {
    const { content } = this.state;

    const section1 = content[0];
    const section2 = content[1];
    const section3 = content[2];

    console.log(section1);

    return (
      <div className="Landing">
        <Nav />
        <Hero />
        {/* <Section1 />
        <hr />
        <Section2 />
        <hr /> */}
        <Section
          classes={section1.classes}
          img={section1.img}
          link={section1.link}
          title={section1.title}
          linkTitle={section1.linkTitle}
        />
        <hr />
        <Section
          classes={section2.classes}
          img={section2.img}
          link={section2.link}
          title={section2.title}
          linkTitle={section2.linkTitle}
        />
        <hr />
        <Section
          classes={section3.classes}
          img={section3.img}
          link={section3.link}
          title={section3.title}
          linkTitle={section3.linkTitle}
        />
        <hr />
        <DividedSection />
        <Footer />
      </div>
    );
  }
}

export default Landing;
