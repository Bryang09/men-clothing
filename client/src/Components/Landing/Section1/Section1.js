import React from "react";

import { Link } from "react-router-dom";

import "./Section1.scss";

const Section1 = () => {
  return (
    <div className="Section1">
      <div className="imgContainer section1Img">
        <div className="img" />
      </div>
      <div className="sectionText section1Text">
        <h2>Jackets for any occation</h2>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          voluptatibus mollitia nobis officia itaque! Repellendus odio
          voluptatibus animi dolorem ipsum ratione. Expedita excepturi deserunt
          saepe velit consectetur maiores omnis vero.
        </h4>
        <Link to="/jackets">
          <h5>Search Jackets</h5>
        </Link>
      </div>
    </div>
  );
};

export default Section1;
