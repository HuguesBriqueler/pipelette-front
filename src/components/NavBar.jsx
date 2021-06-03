import React from "react";
import { BrowserRouter as Router, NavLink, Switch } from "react-router-dom";

import NavRoutes from "./NavRoutes.jsx";

import "../CSS/NavBar.css";

function NavBar() {
  const linkTo = (path, componentName) => (
    <NavLink activeClassName="current" className="link" exact to={path}>
      {componentName}
    </NavLink>
  );

  return (
    <>
      <Router>
        <ul>
          {linkTo("/", "Accueil")} {linkTo("/profile", "Profile")}
          {linkTo("/create", "Créer")} {linkTo("/library", "Bibliothèque")}
        </ul>
        <Switch>
          <NavRoutes />
        </Switch>
      </Router>
    </>
  );
}

export default NavBar;
