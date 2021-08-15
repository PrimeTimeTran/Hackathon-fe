import React, { useState } from "react";

import "./ReceiverCard.css";
import { Card, ProgressBar, Row, Col } from "react-bootstrap";

const ReceiverCard = ({
  media,
  receiver,
  moneyFunded,
  description,
  percentFunded,
}) => {
  const [hover, setHover] = useState(false);

  const hoverStyle = {
    transition: "all 0.3s ease-out",
    boxShadow: "0px 4px 8px rgba(38, 38, 38, 0.2)",
    top: "-4px",
    border: "1px solid #c0c0c0",
  };
  return (
    <>
      <Card
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        style={{
          margin: 40,
          width: "17rem",
          height: "21rem",
          marginBottom: "25px",
          cursor: "pointer",
          ...(hover ? hoverStyle : null),
        }}
      >
        <Card.Img
          variant='top'
          src={media}
          style={{
            width: "100%",
            height: "10rem",
            backgroundPosition: "center",
            objectFit: "cover",
          }}
        />

        <Card.Body>
          <Card.Title>{receiver}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Row
            style={{ paddingTop: "15px", paddingBottom: "8px", fontSize: 12 }}
          >
            <Col>
              <Card.Text sm={9} style={{ textAlign: "left" }}>
                <b>{moneyFunded.toLocaleString()}VND</b> raised
              </Card.Text>
            </Col>
            <Col>
              <Card.Text style={{ textAlign: "right" }}>
                {percentFunded}%
              </Card.Text>
            </Col>
          </Row>

          <ProgressBar
            style={{ height: 10 }}
            variant='warning'
            now={percentFunded}
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default ReceiverCard;
