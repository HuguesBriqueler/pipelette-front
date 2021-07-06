import React from "react";
import PropTypes from "prop-types";

function CapsuleDisplay({ title }) {
  return (
    <div>
      <h1>{title}</h1>
      <button type="button">Lire</button>
      <button type="button">pause</button>
      <button type="button">Supprimer</button>
    </div>
  );
}

CapsuleDisplay.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CapsuleDisplay;
