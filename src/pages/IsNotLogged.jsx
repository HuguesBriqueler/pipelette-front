import React, { useRef } from "react";
import { useAuthentication } from "../contexts/AuthenticationContext.jsx";

function IsNotLogged() {
  const emailInput = useRef();
  const passwordInput = useRef();
  const { setAuthentication } = useAuthentication();

  return (
    <>
      <h1>Bienvenue sur la page de connexion !</h1>
      <form
        className="wrapper"
        onSubmit={(event) => {
          event.preventDefault();

          const user = {
            email: emailInput.current.value,
            password: passwordInput.current.value,
          };

          console.log(user);

          const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          };
          const url = "http://localhost:5000/users/login";
          fetch(url, config)
            .then((res) => res.json())
            .then((data) => {
              const { token } = data;
              console.log(token);
              setAuthentication(token);
            });
        }}
      >
        <div className="form-div">
          <label htmlFor="email" placeholder="youremail@gmail.com">
            Email:{" "}
          </label>
          <input ref={emailInput} type="email" name="email" id="email" />
        </div>
        <div className="form-div">
          <label htmlFor="password">Mot de passe: </label>
          <input
            ref={passwordInput}
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div className="form-div">
          <button className="button okButton">Valider</button>
        </div>
      </form>
    </>
  );
}

export default IsNotLogged;
