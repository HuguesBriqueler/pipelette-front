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
        <div className="navBar">
          <ul>
            <li>{linkTo("/", "Accueil")}</li>
            <li>{linkTo("/profile", "Profil")}</li>
            <li>{linkTo("/create", "Créer")}</li>
            <li>{linkTo("/library", "Bibliothèque")}</li>
          </ul>
        </div>
        <Switch>
          <NavRoutes />
        </Switch>
      </Router>
    </>
  );
}

export default NavBar;
