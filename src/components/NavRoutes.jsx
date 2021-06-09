import React from "react";
import { Route } from "react-router-dom";

import Create from "../pages/Create.jsx";
import Home from "../pages/Home.jsx";
import Library from "../pages/Library.jsx";
import Profile from "../pages/Profile.jsx";
import Register from "../pages/Register.jsx";

function NavRoutes() {
  const routeTo = (path, componentDisplayed) => (
    <Route exact path={path} component={componentDisplayed} />
  );

  return (
    <>
      {routeTo("/", Home)} {routeTo("/profile", Profile)}
      {routeTo("/create", Create)} {routeTo("/library", Library)}
      {routeTo("/register", Register)}
    </>
  );
}

export default NavRoutes;
