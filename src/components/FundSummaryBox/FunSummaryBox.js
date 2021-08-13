import React from "react";
import "./Style.css";

function FunSummaryBox() {
  return (
    <div>
      <div className="grey-box">
        <div>
          <div className="text-center fw-bolder mb-1">
            <p>Collected amount (65%)</p>
            <h2 className="fw-bold"> $7,498</h2>
          </div>
          <div className="progress" style={{ backgroundColor: "pink" }}>
            <div
              className="progress-bar pink"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className=" padding2vh ">
          <br></br>
          <center>
            <button type="button" className=" btn btn-pink btn-lg btn-block">
              Support
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default FunSummaryBox;
