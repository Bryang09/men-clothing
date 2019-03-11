import React from "react";

import "./Hero.scss";

const Hero = props => {
  const { bgClass } = props;
  return <div className={`Hero ${bgClass}`} />;
};

export default Hero;
