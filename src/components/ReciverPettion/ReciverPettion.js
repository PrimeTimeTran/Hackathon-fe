import React, { useState } from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";

import "./style.css";

const ReciverPettion = ({ reciver, handleClick }) => {
  return (
    <>
      <div className="receiver_Contents">
        <div className="d-flex justify-content-center align-items-center">
          <img
            src={
              "https://png.pngtree.com/png-vector/20190217/ourmid/pngtree-illustration-of-charity-logo-design-template-png-image_555252.jpg"
            }
            className="itemReceiver_Img"
            alt="img-charity"
          />
        </div>
        <div className="receiver_Descrip">
          <div className="receiver_body">
            <div className="formgiver">
              <h5>
                <Badge style={{ "text-indent": "0.5em" }} bg="success">
                  From : {reciver?.owner?.lastName} {reciver?.owner?.firstName}
                </Badge>
              </h5>
              <div>
                {" "}
                {`Distance: 
                  ${reciver?.distance} m`}
              </div>
              <br />
            </div>

            <div className="itemName">
              {reciver?.items?.map((item) => (
                <>
                  <div>{`Type: ${item.type}`}</div>
                  <div>{`Weight: ${item.weight}`}</div>
                </>
              ))}
            </div>
            <div className="status">{`Status: ${reciver?.status}`}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReciverPettion;
