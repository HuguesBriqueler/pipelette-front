import React, { useRef } from "react";
import "../CSS/Register.css";

function Register() {
  const emailInput = useRef();
  const passwordInput = useRef();
  const confirmPasswordInput = useRef();

  return (
    <form
      className="wrapper"
      onSubmit={(event) => {
        if (
          passwordInput.current.value === confirmPasswordInput.current.value
        ) {
          event.preventDefault();
          alert("Your button is working");

          const user = {
            email: emailInput.current.value,
            password: passwordInput.current.value,
            confirmPassword: confirmPasswordInput.current.value,
          };

          const url = "http://localhost:5000/users";

          console.log(user);

          const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          };
          fetch(url, config);
        } else {
          alert("Mot de passe différent !");
        }
      }}
    >
      <div className="form-div">
        <label htmlFor="email">Email :</label>
        <input
          className="border border-black"
          ref={emailInput}
          type="email"
          name="email"
          id="email"
          placeholder="enteryourmailhere@gmail.com"
        />
      </div>
      <div className="form-div">
        <label htmlFor="password">Mot de passe :</label>
        <input
          className="border border-black"
          ref={passwordInput}
          type="password"
          name="password"
          id="password"
        />
      </div>
      <div className="form-div">
        <label htmlFor="confirmPassword">Confirmation du mot de passe :</label>
        <input
          className="border border-black"
          ref={confirmPasswordInput}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
        />
      </div>
      <div className="form-div">
        <button className="button okButton" type="submit">
          Envoyer
        </button>
      </div>
    </form>
  );
}

export default Register;
