import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FundingPage from "./pages/FundingPage";
import FundRequestDetailPage from "../src/pages/FundRequestDetailPage/FundRequestDetailPage";
import Navbar from "./components/Navbar";
<<<<<<< HEAD
import FunDetailRequestInfo from "./components/FunDetailRequestInfo/FunDetailRequestInfo";
import NewHomePage from "./pages/NewHomePage/NewHomePage";
=======
>>>>>>> 58eca10b7880af79e931adc7cba1fc5dce0d1402

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/funding" exact component={FundingPage} />
<<<<<<< HEAD
        <Route path="/funDetailPage" exact component={FunDetailRequestInfo} />
        <Route path="/newHomePage" exact component={NewHomePage} />
=======
        <Route
          path="/fundRequestDetailPage"
          exact
          component={FundRequestDetailPage}
        />
>>>>>>> 58eca10b7880af79e931adc7cba1fc5dce0d1402
      </Switch>
    </div>
  );
}

export default App;
