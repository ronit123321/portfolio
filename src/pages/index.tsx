import * as React from "react";
import { Router, Redirect } from "@reach/router";
import Home from "./home";

const IndexPage = () => {
  return (
    <Router>
      <Redirect from="/" to="home" noThrow />
      <Home path="/home" />
    </Router>
  );
};

export default IndexPage;
