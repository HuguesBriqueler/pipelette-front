import React from "react";
import PropTypes from "prop-types";

function PlaylistDisplay({ title }) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

PlaylistDisplay.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PlaylistDisplay;
