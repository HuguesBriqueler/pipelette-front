import React, { useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuthentication } from "../contexts/AuthenticationContext.jsx";

const CSSCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  margin-top: 0.5rem;
`;

function IsNotLogged() {
  const emailInput = useRef();
  const passwordInput = useRef();
  const { setAuthentication } = useAuthentication();

  return (
    <>
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
      <div>
        <CSSCenter>
          <p>Pas encore de compte ?</p>
          <Link to="/register" id="redirectRegisterLink">
            Inscrivez-vous !
          </Link>
        </CSSCenter>
      </div>
    </>
  );
}

export default IsNotLogged;
