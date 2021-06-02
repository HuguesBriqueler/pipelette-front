import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";
import Create from "./Create.jsx";
import Home from "./Home.jsx";
import Library from "./Library.jsx";
import Profile from "./Profile.jsx";

import "../CSS/NavBar.css";

function NavBar() {
  const linkTo = (path, componentName) => (
    <NavLink activeClassName="current" className="link" exact to={path}>
      {componentName}
    </NavLink>
  );

  const routeTo = (path, componentDisplayed) => (
    <Route exact path={path} component={componentDisplayed} />
  );

  return (
    <>
      <Router>
        <ul>
          {linkTo("/", "Accueil")} {linkTo("/profile", "Profile")}
          {linkTo("/create", "Créer")} {linkTo("/library", "Bibliothèque")}
        </ul>
        <Switch>
          {routeTo("/", Home)};{routeTo("/profile", Profile)};
          {routeTo("/create", Create)};{routeTo("/library", Library)};
        </Switch>
      </Router>
    </>
  );
}

export default NavBar;
