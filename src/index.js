import React from "react";
import ReactDOM from "react-dom";
import { Route, Router, BrowserRouter, NavLink } from "react-router-dom";
import { Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";







function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

function Signup(){
  return (
    <div>
      <form>
        <input type="text" name="username" placeholder="Enter your user name"></input>
        <input type="password" name="password" placeholder="Enter your password"></input>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  )
}

function App() {
  return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById("root"));
