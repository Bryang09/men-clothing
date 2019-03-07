import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./dividedSection.scss";

class DividedSection extends Component {
  render() {
    return (
      <div className="DividedSection">
        <div className="boxContainer">
          <div className="box box1">
            <Link to="/shoes">
              <h4 className="link linkOdd">Search Shoes</h4>
            </Link>
          </div>
          <div className="box box2">
            <Link to="/watches">
              <h4 className="link linkEven">Search Watches</h4>
            </Link>
          </div>
          <div className="box box3">
            <Link to="/wallets">
              <h4 className="link linkOdd">Search Wallets</h4>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default DividedSection;
