import { BrowserRouter, Link, Switch, Route, NavLink } from "react-router-dom";
import "./App.css";

import Layout from "./Layout";
import MainContent from "./MainContent";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import UserList from "./UserList";

function App() {
  return (
    <BrowserRouter>
      <div className="pages">
        <div className="header">
          <NavLink to="/home" activeClassName="active">
            Home
          </NavLink>{" "}
          <NavLink to="/product" activeClassName="active">
            Product
          </NavLink>{" "}
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </div>
        <div className="content">
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/product/:id">
              <ProductPage />
            </Route>
            <Route path="/product">
              <ProductPage />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
