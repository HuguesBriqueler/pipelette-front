import React, { useRef } from "react";
import "../CSS/Register.css";

function Register() {
  const emailInput = useRef();
  const passwordInput = useRef();

  return (
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
        const url = "http://localhost:5000/users";
        fetch(url, config);
      }}
    >
      <div className="email">
        <label htmlFor="email" placeholder="enteryourmailhere@gmail.com">
          Email:
        </label>
        <input ref={emailInput} type="email" name="email" id="email" />
      </div>
      <div className="password">
        <label htmlFor="password">Mot de passe:</label>
        <input
          ref={passwordInput}
          type="password"
          name="password"
          id="password"
        />
      </div>
      <button className="okButton">Valider</button>
    </form>
  );
}

export default Register;
