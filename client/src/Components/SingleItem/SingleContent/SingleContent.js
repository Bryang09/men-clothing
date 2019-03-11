import React from "react";

import "./SingleContent.scss";

const SingleContent = props => {
  const { item } = props;
  console.log(item.name);

  return (
    <div className="SingleContent">
      <div className="Container">
        <div className="img" style={{ backgroundImage: `url(${item.img})` }} />
        <div className="info">
          <h1>{item.name}</h1>
          <h3>${item.price}</h3>

          <a href={item.location} target="_blank" rel="noopener noreferrer">
            <h4>See Item</h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleContent;
