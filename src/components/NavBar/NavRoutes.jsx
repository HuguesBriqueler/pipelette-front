import React from "react";
import { Route, Redirect } from "react-router-dom";

import Create from "../../pages/Studio.jsx";
import Home from "../../pages/Home.jsx";
import Playlist from "../../pages/Playlist.jsx";
import Profile from "../../pages/Profile.jsx";
import Register from "../../pages/Register.jsx";
import Login from "../../pages/Login.jsx";
import Logout from "../Logout.jsx";
import { useAuthentication } from "../../contexts/AuthenticationContext.jsx";

function NavRoutes() {
  const routeTo = (path, componentDisplayed) => (
    <Route exact path={path} component={componentDisplayed} />
  );

  const { authentication } = useAuthentication;
  return (
    <main>
      {routeTo("/", Home)}
      {routeTo("/profile", Profile)}
      {routeTo("/create", Create)}
      <Route exact path="/library">
        {authentication ? { Playlist } : <Redirect to="/login" />}
      </Route>
      {routeTo("/logout", Logout)}
      {routeTo("/register", Register)}
      {routeTo("/login", Login)}
    </main>
  );
}

export default NavRoutes;
