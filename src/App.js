import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/form.css";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";

import AboutPage from "./pages/AboutPage/AboutPage";
import FundingPage from "./pages/FundingPage";
import FundRequestDetailPage from "../src/pages/FundRequestDetailPage/FundRequestDetailPage";
import FundDonationBankTransfer from "../src/pages/FundDonationBankTransfer/FundDonationBankTransfer";
import FundRequestPage from "./pages/FundRequestPage/FundRequestPage";
import NewHomePage from "./pages/NewHomePage/NewHomePage";

import NewFooter from "./components/NewFooter/NewFooter";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={NewHomePage} />
          <Route path='/about' exact component={AboutPage} />
          <Route path='/funding' exact component={FundingPage} />
          <Route path='/newHomePage' exact component={NewHomePage} />
          <Route path='/map' exact component={HomePage} />
          <Route path='/funding/:id' exact component={FundRequestDetailPage} />
          <Route
            path='/funding/transfer/:id'
            exact
            component={FundDonationBankTransfer}
          />
          <Route path='/funding/request' exact component={FundRequestPage} />
        </Switch>
        <NewFooter />
      </Router>
    </div>
  );
}

export default App;
