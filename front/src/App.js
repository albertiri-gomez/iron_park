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
import { DogsCreate } from "./pages/Dog.Create.Pages";
import { DogsEdit } from "./pages/Dog.Edit.Pages";
import { MeetingsPages } from "./pages/Meetings.Pages";
import { MeetingsCreate } from "./pages/Meetings.Create.Pages";
import { withAuthentication } from "../lib/withAuthentication";
import { ParkDetail } from "./pages/ParkDetail.pages";
import { MapPages } from "./Pages/Map.pages";

export const App = withAuthentication(() => (
  <Router>
    <ApiContextProvider>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signUp" component={SignUpPage} />
        <Layout>
          <Route path="/profile" component={ProfilePage} />
          <Route
            path="/ParkDetail/:id"
            component={(props) => <ParkDetail idPark={props.match.params.id} />}
          />{" "}
          <Route path="/park" component={ParkPages} />
          <Route path="/map" exact component={MapPages} />
          <Route path="/dog" component={DogPages} />
          <Route path="/create_dog" component={DogsCreate} />
          <Route path="/edit_dog" component={DogsEdit} />
          <Route path="/meeting" component={MeetingsPages} />
          <Route path="/create_meeting" component={MeetingsCreate} />
        </Layout>
      </Switch>
    </ApiContextProvider>
  </Router>
));
