import React, { useContext, useState, createContext } from "react";
import PropTypes from "prop-types";

const AuthenticationContext = createContext();

function AuthenticationProvider({ children }) {
  const [authentication, setAuthentication] = useState();
  const [userId, setUserId] = useState();

  return (
    <AuthenticationContext.Provider
      value={{ authentication, setAuthentication, userId, setUserId }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

const useAuthentication = () => useContext(AuthenticationContext);

AuthenticationProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { AuthenticationContext, AuthenticationProvider, useAuthentication };
