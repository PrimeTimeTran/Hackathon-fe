import React, { useState } from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";

import "./style.css";

const ProviderPetition = ({ provider, handleClick }) => {
  return (
    <>
      <div className="provider_Contents">
        <div className="d-flex justify-content-center align-items-center">
          <img
            src={
              "https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-charity-icon-in-trendy-style-isolated-background-png-image_1540492.jpg"
            }
            className="itemProvider_Img"
            alt="charity-img"
          />
        </div>
        <div className="provider_Descrip">
          <div className="provider_body">
            <div className="formgiver">
              <h5>
                <Badge style={{ "text-indent": "0.5em" }} bg="success">
                  From : {provider?.owner?.lastName}{" "}
                  {provider?.owner?.firstName}
                </Badge>
              </h5>
              <p>
                {" "}
                {`Distance: 
                  ${provider?.distance} m`}
              </p>
              <br />
            </div>

            <div className="itemName">
              {provider?.items?.map((item) => (
                <>
                  <div>{`Type: ${item.type}`}</div>
                  <div>{`Weight: ${item.weight}`}</div>
                </>
              ))}
            </div>
            <div className="status">{`Status: ${provider?.status}`}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProviderPetition;
