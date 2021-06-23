import React from "react";
import { Redirect } from "react-router-dom";
import { useAuthentication } from "../contexts/AuthenticationContext.jsx";

function Logout() {
  const { setAuthentication } = useAuthentication();

  setAuthentication(null);

  return <Redirect to="/" />;
}

export default Logout;
