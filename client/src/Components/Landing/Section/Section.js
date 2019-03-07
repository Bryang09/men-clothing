import React from "react";

import { Link } from "react-router-dom";

const Section = props => {
  console.log(props);

  const { classes, img, link, title, linkTitle } = props;

  return (
    <div className={`${classes} Section`}>
      <div className="imgContainer section1Img">
        <div className={`img ${img}`} />
      </div>
      <div className="sectionText section1Text">
        <h2>{title}</h2>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          voluptatibus mollitia nobis officia itaque! Repellendus odio
          voluptatibus animi dolorem ipsum ratione. Expedita excepturi deserunt
          saepe velit consectetur maiores omnis vero.
        </h4>
        <Link to={`${link}`}>
          <h5>{linkTitle}</h5>
        </Link>
      </div>
    </div>
  );
};

export default Section;
