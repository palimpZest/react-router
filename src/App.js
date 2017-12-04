import React, { Component } from "react";
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import History from "./History";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <Switch>
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="selected">
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink to="/notre-histoire" activeClassName="selected">
                  Histoire
                </NavLink>
              </li>
            </ul>
          </Switch>
          <Route exact path="/" component={Home} />
          <Route path="/notre-histoire" component={History} />
        </nav>
      </BrowserRouter>
    );
  }
}

export default App;
