import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <h5>Bryan's Clothing &copy;</h5>
      <div className="logos">
        <i className="fab fa-facebook fa-2x" />
        <i className="fab fa-instagram fa-2x" />
        <i className="fab fa-twitter fa-2x" />
      </div>
    </footer>
  );
};

export default Footer;
