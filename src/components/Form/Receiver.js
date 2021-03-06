import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { Button } from "react-bootstrap";

const Receiver = () => {
  const singleForm = useSelector((state) => state.form.singleForm);
  return (
    <div className="matching-receiver">
      {singleForm === undefined ? (
        <p>loading</p>
      ) : (
        <>
          <div className="d-flex justify-content-between">
            <span style={{ marginBottom: "1rem", textTransform: "uppercase" }}>
              {singleForm?.owner?.firstName} {singleForm?.owner?.lastName}
            </span>
            {/* <span>
              {Math.round((singleForm?.distance / 1000) * 10) / 10} km
            </span> */}
          </div>

          {singleForm?.items?.map((item) => (
            <>
              <div className="d-flex justify-content-between">
                <span> {item.name} </span>
                <span>
                  {item.quantity} {item.unit}
                </span>
              </div>
            </>
          ))}
          <div>Số điện thoại: {singleForm?.owner.phone}</div>
          <div style={{ marginTop: "1rem" }}>Note: {singleForm.note}</div>
          <div>
            <small>{moment(singleForm.createdAt).fromNow()}</small>
          </div>
          <div className="giver-btn">
            <Button>Trao quà</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Receiver;
