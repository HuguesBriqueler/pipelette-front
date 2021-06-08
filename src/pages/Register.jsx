import React, { useRef } from "react";
import "../CSS/Register.css";

function Register() {
  const emailInput = useRef();
  const passwordInput = useRef();

  return (
    <div className="allForm">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          alert("Your button is working");

          const user = {
            email: emailInput.current.value,
            passwordInput: passwordInput.current.value,
          };

          const url = "http://localhost:3000/users";

          console.log(user);

          const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          };
          fetch(url, config)
            .then((res) => {
              res.json();
            })
            .then((data) => {
              console.log(data);
            });
        }}
      >
        <div className="bothInputs">
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
        </div>
        <button className="okButton" type="submit">
          Valider
        </button>
      </form>
    </div>
  );
}

export default Register;
