import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import "./css/form.css";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";

import FundingPage from "./pages/FundingPage";
import FundRequestDetailPage from "../src/pages/FundRequestDetailPage/FundRequestDetailPage";
// import Navbar from "./components/Navbar";
import NewHomePage from "./pages/NewHomePage/NewHomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NewFooter from "./components/NewFooter/NewFooter";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={NewHomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/funding" exact component={FundingPage} />
        <Route path="/map" exact component={HomePage} />
        <Route
          path="/fundRequestDetailPage"
          exact
          component={FundRequestDetailPage}
        />
      </Switch>
      <NewFooter />
    </div>
  );
}

export default App;
