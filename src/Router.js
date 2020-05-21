import { createBrowserHistory } from "history";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Header from "./Header";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";

const history = createBrowserHistory();

export default () => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};
