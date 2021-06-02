import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";
import Create from "./components/Create.jsx";
import Home from "./components/Home.jsx";
import Library from "./components/Library.jsx";
import Profile from "./components/Profile.jsx";

function App() {
  const linkTo = (path, componentName) => (
    <NavLink activeClassName="current" className="link" exact to={path}>
      {componentName}
    </NavLink>
  );

  const routeTo = (path, componentDisplayed) => (
    <Route exact path={path} component={componentDisplayed} />
  );

  return (
    <>
      <Router>
        {linkTo("/", "Accueil")};{linkTo("/profile", "Profile")};
        {linkTo("/create", "Créer")};{linkTo("/library", "Bibliothèque")};
        <Switch>
          {routeTo("/", Home)};{routeTo("/profile", Profile)};
          {routeTo("/create", Create)};{routeTo("/library", Library)};
        </Switch>
      </Router>
      <div className="App">
        <p>Hello World !</p>
      </div>
    </>
  );
}

export default App;
