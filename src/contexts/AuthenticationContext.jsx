import React, { useContext, useState, createContext } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

function AuthenticationProvider({ children }) {
  const [authentication, setAuthentication] = useState();

  return (
    <AuthContext.Provider value={{ authentication, setAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuthentication = () => useContext(AuthContext);

AuthenticationProvider.propTypes = {
  children: PropTypes.isRequired,
};

export { AuthenticationProvider, useAuthentication };
