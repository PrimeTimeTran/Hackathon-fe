import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Info.css";
import { useHistory } from "react-router-dom";

const Info = () => {
  const history = useHistory();
  return (
    <div className='infoBox'>
      <Card className='infoBoxCard'>
        <Card.Body className='infoBody'>
          <div className='leftSide'>
            <Card.Title className='infoBoxSubTitle'>Donate Goods</Card.Title>
            <Card.Text className='infoBoxText'>
              With two simple clicks you can donate money to people near you or
              in whole Vietnam who are currently struggling to maintain a
              regular life. Your money goes directly to the person in need.
            </Card.Text>
            <Card.Text className='infoBoxText'>
              You would rather donate goods such as food, cloathes or hygenic
              masks?
            </Card.Text>
            <Button variant='primary' className='infoBoxButton'>
              I want to donate goods
            </Button>
          </div>
          <div className='rightSide'>
            <Card.Title className='infoBoxSubTitle'>
              Request a donation
            </Card.Title>
            <Card.Text className='infoBoxText'>
              You are currently struggling to maintain a regular and secure life
              due to the corona pandemic? Please sign up on our website, fill in
              the required information and make donation request within a few
              clicks!
            </Card.Text>
            <Card.Text className='infoBoxText'>
              Press the button below to sign up or or request a donation with
              only a few clicks!
            </Card.Text>
            <div className='receiverRequestButtons'>
              <Button
                onClick={() => {
                  history.push(`/signup`);
                }}
                variant='primary'
                className='infoBoxButton'
              >
                Sign up
              </Button>
              <Button
                onClick={() => {
                  history.push(`/request`);
                }}
                variant='primary'
                className='infoBoxButton'
              >
                Request a Donation
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Info;
