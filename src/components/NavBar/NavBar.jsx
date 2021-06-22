import React from "react";
import { useAuthentication } from "../../contexts/AuthenticationContext.jsx";
import NavBarLogged from "./NavBarLogged.jsx";
import NavBarNotLogged from "./NavBarNotLogged.jsx";

import "../../CSS/NavBar.css";

function NavBar() {
  const { authentication } = useAuthentication;

  if (authentication != null) {
    return <NavBarLogged />;
  }
  return <NavBarNotLogged />;
}

export default NavBar;
