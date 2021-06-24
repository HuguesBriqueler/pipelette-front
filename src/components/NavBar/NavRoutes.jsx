import React from "react";
import { Route } from "react-router-dom";

import Create from "../../pages/Studio.jsx";
import Home from "../../pages/Home.jsx";
import Profile from "../../pages/Profile.jsx";
import Register from "../../pages/Register.jsx";
import Login from "../../pages/Login.jsx";
import Playlist from "../../pages/Playlist.jsx";
import Logout from "../Logout.jsx";
import Capsule from "../../pages/Capsule.jsx";

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

      {/* A LIRE: route qui affiche le composant PlaylistIfLogged
      à remettre pour accèder a playlist que si user logged et mettre
      en place la redirection vers "Connexion". Plus, il faut supprimer
      la route qui affiche le composant Playlist */}

      {/* {routeTo("/library", PlaylistIfLogged)} */}
      {routeTo("/library", Playlist)}
      {routeTo("/logout", Logout)}
      {routeTo("/register", Register)}
      {routeTo("/login", Login)}
      {routeTo("/capsules", Capsule)}
    </main>
  );
}

export default NavRoutes;
