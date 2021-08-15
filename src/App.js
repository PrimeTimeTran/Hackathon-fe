import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/form.css";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";

import AboutPage from "./pages/AboutPage/AboutPage";
import FundingPage from "./pages/FundingPage";
import FundRequestDetailPage from "../src/pages/FundRequestDetailPage/FundRequestDetailPage";
import NewHomePage from "./pages/NewHomePage/NewHomePage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import LogInPage from "./pages/LogInPage/LogInPage";

import NewFooter from "./components/NewFooter/NewFooter";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={NewHomePage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/funding" exact component={FundingPage} />
          <Route path="/newHomePage" exact component={NewHomePage} />

          <Route path="/map" exact component={HomePage} />
          <Route
            path="/fundRequestDetailPage"
            exact
            component={FundRequestDetailPage}
          />
          <Route path="/signup" exact component={SignUpPage} />
          <Route path="/login" exact component={LogInPage} />
        </Switch>
        <NewFooter />
      </Router>
    </div>
  );
}

export default App;
