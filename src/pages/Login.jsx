import React from "react";
import { Redirect } from "react-router-dom";
import { useAuthentication } from "../contexts/AuthenticationContext.jsx";
import IsNotLogged from "./IsNotLogged.jsx";

function Login() {
  const { authentication } = useAuthentication();

  if (authentication != null) {
    return (
      <>
        <h1>Nice ! You just logged to your Pipelette account !</h1>
        <h2>{authentication}</h2>
        <Redirect to="/" />;
      </>
    );
  }

  return <IsNotLogged />;
}

export default Login;
