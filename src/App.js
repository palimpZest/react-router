import React, { Component } from "react";
import { Route, BrowserRouter, Switch, NavLink, Link } from "react-router-dom";
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
                <NavLink to exact="/" activeClassName="selected">
                  <Link to="/">Accueil</Link>
                </NavLink>
              </li>
              <li>
                <NavLink to="/notre-histoire" activeClassName="selected">
                  {/* <Link to="/notre-histoire">Histoire</Link> */}
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
