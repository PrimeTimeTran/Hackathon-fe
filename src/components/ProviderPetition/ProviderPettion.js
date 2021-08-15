import React, { useState } from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import Moment from "react-moment";
import "./style.css";

const ProviderPetition = ({ provider, handleClick }) => {
  return (
    <>
      <div className="provider_Contents">
        <img
          src={
            "https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-charity-icon-in-trendy-style-isolated-background-png-image_1540492.jpg"
          }
          className="itemProvider_Img"
          alt="charity-img"
        />

        <div className="provider_Descrip">
          <div className="provider_body">
            <div className="formgiver">
              <Badge style={{ "text-indent": "0.5em" }} bg="success">
                Từ
              </Badge>
              <h6>
                {provider?.owner?.lastName} {provider?.owner?.firstName}
              </h6>

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
            <div>{`Trạng thái: ${
              provider?.status === "requested" ? "Cần cho" : ""
            }`}</div>
            Tạo lúc:{" "}
            <Moment className="status" fromNow ago>
              {provider?.isolatedDate}
            </Moment>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProviderPetition;
