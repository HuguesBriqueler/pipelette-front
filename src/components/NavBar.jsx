import React from "react";
import { BrowserRouter as Router, NavLink, Switch } from "react-router-dom";
import NavRoutes from "./NavRoutes.jsx";
import imgMicro from "../assets/micro.jpg";
import playlist from "../assets/playlist.jpg";
import home from "../assets/home.jpg";
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
          </ul>
          <ul className="navBarFooterUl">
            <li>
              <img src={home} />
              {linkTo("/", "Accueil")}
            </li>
            <li>
              <img src={imgMicro} />
              {linkTo("/create", "Studio")}
            </li>
            <li>
              <img src={playlist} />
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
