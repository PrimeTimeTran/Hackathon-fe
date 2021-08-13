import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FundingPage from "./pages/FundingPage";

import Navbar from "./components/Navbar";
import FunDetailRequestInfo from "./components/FunDetailRequestInfo/FunDetailRequestInfo";
import NewHomePage from "./pages/NewHomePage/NewHomePage";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/funding" exact component={FundingPage} />
        <Route path="/funDetailPage" exact component={FunDetailRequestInfo} />
        <Route path="/newHomePage" exact component={NewHomePage} />
      </Switch>
    </div>
  );
}

export default App;
