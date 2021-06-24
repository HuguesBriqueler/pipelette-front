import React from "react";
import { Redirect } from "react-router-dom";
import { useAuthentication } from "../contexts/AuthenticationContext.jsx";
import Playlist from "../pages/Playlist.jsx";

function PlaylistIfLogged() {
  const { authentication } = useAuthentication();

  return authentication ? <Playlist /> : <Redirect to="/login" />;
}

export default PlaylistIfLogged;
