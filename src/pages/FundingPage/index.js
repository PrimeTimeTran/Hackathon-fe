import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";

import Story from "../../components/Story/Story";
import ReceiversCarousel from "../../components/ReceiversCarousel/ReceiversCarousel";
import Info from "../../components/Info/Info";

import { getDonationRequests } from "../../redux/DonationRequests/DonationRequestsAction";
import { useDispatch, useSelector } from "react-redux";

const FundingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getDonationRequests(20)), [dispatch]);
  const donationRequests = useSelector(
    (state) => state.requests.donationRequests
  );
  return (
    <div>
      <Carousel2 />
      <br />
      <Info />
      <br />
      <center>
        <ReceiversCarousel items={donationRequests.slice(0, 10) || []} />
      </center>
      <Story />
      <center>
        <ReceiversCarousel items={donationRequests.slice(10, 20) || []} />
      </center>
      <Footer />
    </div>
  );
};

export default FundingPage;
