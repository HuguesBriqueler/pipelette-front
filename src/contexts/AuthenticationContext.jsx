import React, { useContext, useState, createContext } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

function AuthenticationProvider({ children }) {
  const [authentication, setAuthentication] = useState();
  const [userId, setUserId] = useState();

  return (
    <AuthContext.Provider
      value={{ authentication, setAuthentication, userId, setUserId }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuthentication = () => useContext(AuthContext);

AuthenticationProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { AuthenticationProvider, useAuthentication };
