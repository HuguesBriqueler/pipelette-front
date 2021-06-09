import React, { useRef } from "react";
import "../CSS/Register.css";

function Register() {
  const emailInput = useRef();
  const passwordInput = useRef();
  const phoneInput = useRef();
  const lastnameInput = useRef();
  const firstnameInput = useRef();

  return (
    <form
      className="wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        alert("Your button is working");

        const user = {
          mail: emailInput.current.value,
          passwordInput: passwordInput.current.value,
          phoneInput: phoneInput.current.value,
          lastnameInput: lastnameInput.current.value,
          firstnameInput: firstnameInput.current.value,
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
      <div className="firstname">
        <label htmlFor="firstname" placeholder="enteryourmailhere@gmail.com">
          Prénom:
        </label>
        <input
          className="border border-black"
          ref={firstnameInput}
          type="firstname"
          name="firstname"
          id="firstname"
        />
      </div>
      <div className="lastname">
        <label htmlFor="lastname" placeholder="jean">
          Nom:
        </label>
        <input
          className="border border-black"
          ref={lastnameInput}
          type="lastname"
          name="lastname"
          id="lastname"
        />
      </div>
      <div className="phone">
        <label htmlFor="phone" placeholder="06....">
          Numéro de téléphone:
        </label>
        <input
          className="border border-black"
          ref={phoneInput}
          type="phone"
          name="phone"
          id="phone"
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
