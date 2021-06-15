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
        alert("Your button is working");

        const user = {
          email: emailInput.current.value,
          password: passwordInput.current.value,
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
      }}
    >
      <div className="email">
        <label htmlFor="email" placeholder="enteryourmailhere@gmail.com">
          Email:
        </label>
        <input
          className="border border-black"
          ref={emailInput}
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div className="password">
        <label htmlFor="password">Mot de passe:</label>
        <input
          className="border border-black"
          ref={passwordInput}
          type="password"
          name="password"
          id="password"
        />
      </div>
      <button
        className="okButton col-start-3 row-start-1 row-span-2"
        type="submit"
      >
        Valider
      </button>
    </form>
  );
}

export default Register;
