import React from "react";
import { Route } from "react-router-dom";

import Create from "../pages/Create.jsx";
import Home from "../pages/Home.jsx";
import Library from "../pages/Library.jsx";
import Profile from "../pages/Profile.jsx";

function NavRoutes() {
  const routeTo = (path, componentDisplayed) => (
    <Route exact path={path} component={componentDisplayed} />
  );

  return (
    <div>
      {routeTo("/", Home)} {routeTo("/profile", Profile)}
      {routeTo("/create", Create)} {routeTo("/library", Library)}
    </div>
  );
}

export default NavRoutes;
