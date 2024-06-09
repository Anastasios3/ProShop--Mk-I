import React from "react";
import { Spinner } from "react-bootstrap";
import PropTypes from "prop-types";

const Loader = ({
  size = 100,
  color = "primary",
  animation = "border",
  margin = "auto",
  display = "block",
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Spinner
        animation={animation}
        role="status"
        variant={color}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          margin: margin,
          display: display,
        }}
      />
    </div>
  );
};

Loader.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  animation: PropTypes.string,
  margin: PropTypes.string,
  display: PropTypes.string,
};

export default Loader;
