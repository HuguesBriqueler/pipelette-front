import React from "react";
import PropTypes from "prop-types";

function CapsuleDisplay({ title }) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

CapsuleDisplay.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CapsuleDisplay;
