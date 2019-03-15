import React from "react";

import "./Container.scss";

import Items from "./Items/Items";

const Container = props => {
  const { title, data } = props;


  return (
    <div className="Container">
      <h1>{title}</h1>
      <Items data={data} />
    </div>
  );
};

export default Container;
