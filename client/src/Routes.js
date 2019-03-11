import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";
import { request } from "./Request";
import axios from "axios";

import Landing from "./Components/Landing/Landing";

import Jackets from "./Components/Items/Jackets/Jackets";
import Pants from "./Components/Items/Pants/Pants";
import Shirts from "./Components/Items/Shirts/Shirts";
import Shoes from "./Components/Items/Shoes/Shoes";
import Watches from "./Components/Items/Watches/Watches";
import Wallets from "./Components/Items/Wallets/Wallets";

import SingleItem from "./Components/SingleItem/SingleItem";

class Routes extends Component {
  state = {
    data: []
  };

  componentWillMount = () => {
    axios
      .get(request)
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    const { data } = this.state;
    return (
      <Switch>
        {/* <Route exact path="/" component={Landing}/> */}
        <Route exact path="/" render={props => <Landing data={data} />} />
        <Route
          exact
          path="/jackets"
          render={props => <Jackets data={data} />}
        />
        <Route exact path="/pants" render={props => <Pants data={data} />} />
        <Route exact path="/shirts" render={props => <Shirts data={data} />} />
        <Route exact path="/shoes" render={props => <Shoes data={data} />} />
        <Route
          exact
          path="/watches"
          render={props => <Watches data={data} />}
        />
        <Route
          exact
          path="/wallets"
          render={props => <Wallets data={data} />}
        />
        {/* <Route
          exact
          path="/:id"
          render={props => <SingleItem data={data} />}
        /> */}
        <Route exact path="/:id" component={SingleItem} />
      </Switch>
    );
  }
}

export default Routes;
