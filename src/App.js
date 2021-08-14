import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FundingPage from "./pages/FundingPage";
import FundRequestDetailPage from "../src/pages/FundRequestDetailPage/FundRequestDetailPage";
import Navbar from "./components/Navbar";
import FundDonationBankTransfer from "../src/pages/FundDonationBankTransfer/FundDonationBankTransfer";
import FundRequestPage from "./pages/FundRequestPage/FundRequestPage";
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/funding" exact component={FundingPage} />
        <Route
          path="/fundRequestDetailPage"
          exact
          component={FundRequestDetailPage}
        />
        <Route
          path="/FundDonationBankTransfer"
          exact
          component={FundDonationBankTransfer}
        />
      </Switch>
      <Route path="/FundRequestPage" exact component={FundRequestPage} />
    </div>
  );
}

export default App;
