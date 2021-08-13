import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import FundingPage from "./pages/FundingPage";

import NewHomePage from "./pages/NewHomePage/NewHomePage";
import Header from "./components/Header/Header"
import FunDetailRequestInfo from "./components/FunDetailRequestInfo/FunDetailRequestInfo";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/newhomepage" exact component={NewHomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/funding" exact component={FundingPage} />
        <Route path="/funDetailPage" exact component={FunDetailRequestInfo} />
      </Switch>
    </div>
  );
}

export default App;
