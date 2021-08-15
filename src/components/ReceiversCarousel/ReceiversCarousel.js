import React, { useEffect, useState } from "react";
import "./ReceiverCarousel.css";
import ReceiverCard from "../ReceiverCard/ReceiverCard";

import SwiperCore, { Navigation } from "swiper";

import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { petitionActions } from "../../redux/actions/petition.actions";

import PaginationBar from "../../components/PaginationBar/PaginationBar";

SwiperCore.use([Navigation]);

const ReceiversCarousel = () => {
  const [pageNum, setPageNum] = useState(1);
  const dispatch = useDispatch();
  const totalPageNum = useSelector((state) => state.petition.totalPageNum);
  const loading = useSelector((state) => state.petition.loading);
  const petitions = useSelector((state) => state.petition.petitions);

  useEffect(() => {
    dispatch(petitionActions.getAllPetitions(pageNum, 9));
  }, [dispatch, pageNum]);

  return (
    <>
      <Container>
        <Row>
          {petitions.newPetitions?.map((info) => (
            <Col>
              <ReceiverCard {...info} />
            </Col>
          ))}
        </Row>
        <PaginationBar
          pageNum={pageNum}
          setPageNum={setPageNum}
          totalPageNum={totalPageNum}
          loading={loading}
        />
      </Container>
      ;
    </>
  );
};

export default ReceiversCarousel;
