import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PlaylistDisplay({ title }) {
  return (
    <div>
      <Link to="/capsules">{title}</Link>
    </div>
  );
}

PlaylistDisplay.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PlaylistDisplay;
