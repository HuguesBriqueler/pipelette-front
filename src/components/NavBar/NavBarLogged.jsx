import React from "react";
import { BrowserRouter as Router, NavLink, Switch } from "react-router-dom";
import NavRoutes from "./NavRoutes.jsx";

import "../../CSS/NavBar.css";

function NavBarLogged() {
  const linkTo = (path, content) => (
    <NavLink activeClassName="current" className="link" exact to={path}>
      {content}
    </NavLink>
  );

  return (
    <>
      <Router>
        <nav>
          <ul className="navBarUl">
            <li>{linkTo("/profile", "Profil")}</li>
            <li>{linkTo("/logout", "Deconnexion")}</li>
          </ul>
          <ul className="navBarFooterUl">
            <li>
              {linkTo(
                "/",
                <>
                  <img src="https://img.icons8.com/windows/32/000000/home.png" />
                  Accueil
                </>
              )}
            </li>
            <li>
              {linkTo(
                "/create",
                <>
                  <img src="https://img.icons8.com/fluent-systems-regular/48/000000/microphone--v1.png" />
                  Studio
                </>
              )}
            </li>
            <li>
              {linkTo(
                "/library",
                <>
                  <img src="https://img.icons8.com/fluent-systems-regular/48/000000/playlist.png" />
                  Mes Audios
                </>
              )}
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

export default NavBarLogged;
