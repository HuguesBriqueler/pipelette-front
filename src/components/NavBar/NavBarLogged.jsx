import React from "react";
import { BrowserRouter as Router, NavLink, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faHome,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
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
                  <FontAwesomeIcon className="icon" icon={faHome} />
                  Accueil
                </>
              )}
            </li>
            <li>
              {linkTo(
                "/create",
                <>
                  <FontAwesomeIcon className="icon" icon={faMicrophone} />
                  Studio
                </>
              )}
            </li>
            <li>
              {linkTo(
                "/library",
                <>
                  <FontAwesomeIcon className="icon" icon={faMusic} />
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
