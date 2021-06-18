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
        <nav>
          <ul className="navBarUl">
            <li>{linkTo("/profile", "Profil")}</li>
            <li>{linkTo("/register", "S'inscrire")}</li>
            <li>{linkTo("/login", "Se connecter")}</li>
          </ul>
          <ul className="navBarFooterUl">
            <li>
              <img src="https://img.icons8.com/windows/32/000000/home.png" />
              {linkTo("/", "Accueil")}
            </li>
            <li>
              <img src="https://img.icons8.com/fluent-systems-regular/48/000000/microphone--v1.png" />
              {linkTo("/create", "Studio")}
            </li>
            <li>
              <img src="https://img.icons8.com/fluent-systems-regular/48/000000/playlist.png" />
              {linkTo("/library", "Playlist")}
            </li>
          </ul>
        </nav>
        <Switch>
          <NavRoutes />
        </Switch>
      </Router>
    </>
  );
}

export default NavBar;
