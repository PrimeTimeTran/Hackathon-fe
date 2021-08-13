import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";

import Story from "../../components/Story/Story";
import ReceiversCarousel from "../../components/ReceiversCarousel/ReceiversCarousel";
import Info from "../../components/Info/Info";
import Carousel2 from "../../components/CarouselMainPage/Carousel2";
import { getDonationRequests } from "../../redux/DonationRequests/DonationRequestsAction";
import { useDispatch, useSelector } from "react-redux";
import ReceiverCard from "../../components/ReceiverCard/ReceiverCard";

const FundingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getDonationRequests(20)), [dispatch]);
  const donationRequests = useSelector(
    (state) => state.requests.donationRequests
  );
  let json = {
    media: "",
    receiver: "Ryan",
    moneyFunded: 253000,
    description: "Gia đình bị ảnh hưởng bởi Covid, xin bà con giúp đỡ",
    percentFunded: 83,
  };

  return (
    <div>
<<<<<<< HEAD
      <Carousel2 />
      <br />
      <Info />
=======
      {/* <Carousel2 /> */}
      <ReceiverCard {...json} />

      <Introduction />
>>>>>>> 4309b54165701b6c84247bfe24aac5d0ffd56300
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
