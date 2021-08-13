import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Info.css";

import { Card, CardGroup, Col, ProgressBar, Row } from "react-bootstrap";

const Info = () => {
  return (
    <div className="infoBox">
      <Card className="infoBoxCard">
        <Card.Header className="infoBoxTitle">
          Donate or make a Donation Request with Ease!
        </Card.Header>
        <Card.Body className="infoBody">
          <div className="leftSide">
            <Card.Title className="infoBoxSubTitle">
              Donate Money to People in Need
            </Card.Title>
            <Card.Text className="infoBoxText">
              With two simple clicks you can donate money to people near you or
              in whole Vietnam who are currently struggling to maintain a
              regular life. Simply chose a person you want to help from the
              options below, choose to donate and make a bank transfer directly
              to the person in need. No intermediary or other organizations are
              involved! Your money goes directly to the person in need.
            </Card.Text>
            <Card.Text className="infoBoxText">
              You would rather donate goods such as food, cloathes or hygenic
              masks? Please click the button below and you will be redirected to
              goods donation page and help people in your area right now!
            </Card.Text>
            <Button variant="primary" className="infoBoxButton">
              I want to donate goods
            </Button>
          </div>
          <div className="rightSide">
            <Card.Title className="infoBoxSubTitle">
              Request a donation
            </Card.Title>
            <Card.Text className="infoBoxText">
              You are currently struggling to maintain a regular and secure life
              due to the corona pandemic? Please sign up on our website, fill in
              the required information and make donation request within a few
              clicks!
            </Card.Text>
            <Card.Text className="infoBoxText">
              Press the button below, sign up and join our community to receive
              help as soon as possible!
            </Card.Text>
            <Button variant="primary" className="infoBoxButton">
              Sign up
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Info;
