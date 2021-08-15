import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/form.css";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";

import AboutPage from "./pages/AboutPage/AboutPage";
import FundingPage from "./pages/FundingPage";
import FundRequestDetailPage from "../src/pages/FundRequestDetailPage/FundRequestDetailPage";

// import FunDetailRequestInfo from "./components/FunDetailRequestInfo/FunDetailRequestInfo";
import NewHomePage from "./pages/NewHomePage/NewHomePage";

// import Navbar from "./components/Navbar";

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
          {/* <Route path="/funDetailPage" exact component={FunDetailRequestInfo} /> */}
          <Route path="/newHomePage" exact component={NewHomePage} />

          <Route path="/map" exact component={HomePage} />
          <Route
            path="/fundRequestDetailPage"
            exact
            component={FundRequestDetailPage}
          />
        </Switch>
        <NewFooter />
      </Router>
    </div>
  );
}

export default App;
