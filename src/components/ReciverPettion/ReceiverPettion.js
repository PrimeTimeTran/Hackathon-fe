import React, { useState } from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import Moment from "react-moment";
import "./style.css";

const ReceiverPettion = ({ receiver, handleClick }) => {
  return (
    <>
      <div className="receiver_Contents">
        <div>
          <img
            src={
              "https://png.pngtree.com/png-vector/20190217/ourmid/pngtree-illustration-of-charity-logo-design-template-png-image_555252.jpg"
            }
            className="itemReceiver_Img"
            alt="img-charity"
          />
          <div className="formgiver">
            <Badge style={{ "text-indent": "0.5em" }} bg="success">
              From
            </Badge>
            <h6>
              {receiver?.owner?.lastName} {receiver?.owner?.firstName}
            </h6>

            <div>
              <p>{`Gender: ${
                receiver?.owner.gender === "m" ? "Male" : "Female"
              }`}</p>
            </div>
          </div>
        </div>

        <div>
          <div className="receiver_body">
            <div className="itemName">
              {receiver?.items?.map((item) => (
                <>
                  <div>{`Type: ${item.type}`}</div>
                  <div>{`Name: ${item.name}`}</div>
                  <div>{`Weight: ${item.weight}`}</div>
                </>
              ))}
            </div>

            <div className="itemName">
              <div>{`ReceiveAmount: ${receiver?.receiveAmount}`}</div>
              <div>{`Status: ${receiver?.status}`}</div>
              <div>
                {" "}
                Create at:{" "}
                <Moment fromNow ago>
                  {receiver?.isolatedDate}
                </Moment>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReceiverPettion;
