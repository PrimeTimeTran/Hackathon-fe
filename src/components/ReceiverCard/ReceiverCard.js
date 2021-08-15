import React, { useState } from "react";

import "./ReceiverCard.css";
import { Card, ProgressBar, Row, Col } from "react-bootstrap";
import placeholderImage from "../../images/person.jpg";
import { useHistory } from "react-router-dom";

const ReceiverCard = ({ ...info }) => {
  const [hover, setHover] = useState(false);
  const history = useHistory();

  const hoverStyle = {
    transition: "all 0.3s ease-out",
    boxShadow: "0px 4px 8px rgba(38, 38, 38, 0.2)",
    top: "-4px",
    border: "1px solid #c0c0c0",
  };
  return (
    <>
      <Card
        onClick={() => history.push(`funding/${info._id}`)}
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
          src={placeholderImage}
          style={{
            width: "100%",
            height: "10rem",
            backgroundPosition: "center",
            objectFit: "cover",
          }}
        />

        <Card.Body>
          <Card.Title>
            {info.owner.firstName} {info.owner.lastName}
          </Card.Title>
          <Card.Text>
            {info.description || "Anyone please help fund me!"}
          </Card.Text>
          <Row
            style={{ paddingTop: "15px", paddingBottom: "8px", fontSize: 12 }}
          >
            <Col>
              <Card.Text sm={9} style={{ textAlign: "left" }}>
                <b>{info.actualAmount.toLocaleString()}VND</b> raised
              </Card.Text>
            </Col>
            <Col>
              <Card.Text style={{ textAlign: "right" }}>
                {info.actualAmount / info.startedAmount}%
              </Card.Text>
            </Col>
          </Row>

          <ProgressBar
            style={{ height: 10 }}
            variant='warning'
            now={info.actualAmount / info.startedAmount}
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default ReceiverCard;
