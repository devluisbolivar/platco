import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { useStateValue } from "./StateProvider";

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/content/Chat";
import Login from "./components/auth/Login";

function App() {
  const [{ user }] = useStateValue();
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Fragment>
            <Header />
            <div className="app_body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Bienvenido</h1>
                </Route>
              </Switch>
            </div>
          </Fragment>
        )}
      </Router>
    </div>
  );
}

export default App;
