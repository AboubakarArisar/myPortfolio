import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import PageNotFound from "./components/PageNotFound";
import Footer from "../Components/Footer";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/footer" component={Footer} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
