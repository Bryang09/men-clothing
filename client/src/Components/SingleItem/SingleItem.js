import React, { Component } from "react";

import axios from "axios";

import { request } from "../../Request";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import SingleContent from "./SingleContent/SingleContent";

import "./SingleItem.scss";

class SingleItem extends Component {
  state = {
    item: []
  };

  componentWillMount = () => {
    const id = this.props.match.params.id;

    axios
      .get(`${request}/${id}`)
      .then(res => this.setState({ item: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    const { item } = this.state;

    return (
      <div className="SingleItem">
        <Nav />
        <SingleContent item={item} />
        <Footer />
      </div>
    );
  }
}

export default SingleItem;
