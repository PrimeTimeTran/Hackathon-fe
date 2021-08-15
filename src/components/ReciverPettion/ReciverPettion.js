import React, { useState } from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import Moment from "react-moment";
import "./style.css";

const ReciverPettion = ({ reciver, handleClick }) => {
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
              Từ
            </Badge>
            <h6>
              {reciver?.owner?.lastName} {reciver?.owner?.firstName}
            </h6>
          </div>
        </div>

        <div className="receiver_Descrip">
          <div className="receiver_body">
            <div className="itemName">
              {reciver?.items?.map((item) => (
                <>
                  <div>{`Loại: ${item.type}`}</div>
                  <div>{`Tên: ${item.name}`}</div>
                  <div>{`Số lượng: ${item.weight}`}</div>
                </>
              ))}
            </div>

            <div className="itemName">
              <div>{`Cần nhận: ${reciver?.receiveAmount}`}</div>
              <div>{`Trạng thái: ${
                reciver?.status === "requested" ? "Đang cần giúp đỡ" : ""
              }`}</div>
              <div>
                {" "}
                Lúc:{" "}
                <Moment fromNow ago>
                  {reciver?.isolatedDate}
                </Moment>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReciverPettion;
