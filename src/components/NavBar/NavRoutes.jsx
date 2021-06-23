import React from "react";
import { Route } from "react-router-dom";

import Create from "../../pages/Studio.jsx";
import Home from "../../pages/Home.jsx";
import Profile from "../../pages/Profile.jsx";
import Register from "../../pages/Register.jsx";
import Login from "../../pages/Login.jsx";
import Playlist from "../../pages/Playlist.jsx";
import Logout from "../Logout.jsx";
// import PlaylistIfLogged from "../PlaylistIfLogged.jsx";

function NavRoutes() {
  const routeTo = (path, componentDisplayed) => (
    <Route exact path={path} component={componentDisplayed} />
  );

  return (
    <main>
      {routeTo("/", Home)}
      {routeTo("/profile", Profile)}
      {routeTo("/create", Create)}

      {/* A LIRE: route à remettre pour acceder a playlist que si user logged */}

      {/* {routeTo("/library", PlaylistIfLogged)} */}
      {routeTo("/library", Playlist)}
      {routeTo("/logout", Logout)}
      {routeTo("/register", Register)}
      {routeTo("/login", Login)}
    </main>
  );
}

export default NavRoutes;
