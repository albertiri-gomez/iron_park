import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Index } from "./pages/Index.pages";
import { LoginPage } from "./pages/Login.Page";
import { SignUpPage } from "./pages/SignUp.Page";
import { ProfilePage } from "./pages/Profile.pages";
import { ParkPages } from "./pages/Park.pages";
import { ApiContextProvider } from "../context/ApiContext";
import { Layout } from "./components/Layouts/Layout";
import { DogPages } from "./pages/Dog.Pages";

export const App = () => (
  <Router>
    <ApiContextProvider>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signUp" component={SignUpPage} />
        <Layout>
          <Route path="/profile" component={ProfilePage} />
          <Route path="/park" component={ParkPages} />
          <Route path="/dog" component={DogPages} />
        </Layout>
      </Switch>
    </ApiContextProvider>
  </Router>
);
