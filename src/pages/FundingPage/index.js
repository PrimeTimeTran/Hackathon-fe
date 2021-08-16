import React from "react";
import ReceiversCarousel from "../../components/ReceiversCarousel/ReceiversCarousel";
import Info from "../../components/Info/Info";
import Carousel2 from "../../components/CarouselMainPage/Carousel2";

const FundingPage = () => {
  return (
    <div>
      <Carousel2 />
      <br />
      <Info />
      <br />
      <ReceiversCarousel />
    </div>
  );
};

export default FundingPage;
