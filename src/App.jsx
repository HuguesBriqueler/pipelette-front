import React from "react";
import NavBar from "./components/NavBar.jsx";
import { AuthenticationProvider } from "./contexts/AuthenticationContext.jsx";
import "./App.css";

function App() {
  return (
    <AuthenticationProvider>
      <NavBar />
    </AuthenticationProvider>
  );
}

export default App;
