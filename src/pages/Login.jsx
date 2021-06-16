import React, { useRef } from "react";

function Login() {
  const emailInput = useRef();
  const passwordInput = useRef();
  return (
    <>
      <h1>Bienvenue sur la page de conexion !</h1>
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
          fetch(url, config);
        }}
      >
        <div className="email">
          <label htmlFor="email" placeholder="youremail@gmail.com">
            Email:{" "}
          </label>
          <input ref={emailInput} type="email" name="email" id="email" />
        </div>
        <div className="password">
          <label htmlFor="password">Mot de passe: </label>
          <input
            ref={passwordInput}
            type="password"
            name="password"
            id="password"
          />
        </div>
        <button>Valider</button>
      </form>
    </>
  );
}

export default Login;
