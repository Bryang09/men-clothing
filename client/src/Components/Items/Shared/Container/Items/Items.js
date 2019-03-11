import React from "react";

import { Link } from "react-router-dom";

import "./Items.scss";

const Items = props => {
  const { data } = props;

  console.log(data);

  const clothingData = data.map(res => {
    return (
      <div className="clothingItem" key={res._id}>
        <Link to={`${res._id}`}>
          <div className="img" style={{ backgroundImage: `url(${res.img})` }}>
            <div className="desc">
              <h3>{res.name}</h3>
              <h4 className="price">$ {res.price}</h4>
            </div>
          </div>{" "}
        </Link>
      </div>
    );
  });

  return <div className="Items">{clothingData}</div>;
};

export default Items;
