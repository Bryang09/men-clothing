import React from "react";

const Button = props => {
  const { extend, burgerExtended } = props;
  return (
    <div className="BurgerButton" onClick={extend}>
      <div
        className="line line1"
        style={
          burgerExtended
            ? { transform: `rotate(45deg) translate(0, 1px)` }
            : null
        }
      />
      <div
        className="line line2"
        style={burgerExtended ? { display: "none" } : null}
      />
      <div
        className="line line3"
        style={
          burgerExtended
            ? { transform: `rotate(-45deg) translate(3px, -6px)` }
            : null
        }
      />
    </div>
  );
};

export default Button;
