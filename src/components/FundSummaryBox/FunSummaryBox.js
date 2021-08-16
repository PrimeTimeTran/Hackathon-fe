import React from "react";
import { useHistory, useParams } from "react-router-dom";
import "./Style.css";

function FunSummaryBox() {
  const params = useParams();
  const history = useHistory();

  return (
    <div>
      <div className='grey-box'>
        <div>
          <div className='text-center fw-bolder mb-1'>
            <p>Collected amount (65%)</p>
            <h2 className='fw-bold'> $7,498</h2>
          </div>
          <div className='progress' style={{ backgroundColor: "pink" }}>
            <div
              className='progress-bar pink'
              role='progressbar'
              aria-valuenow='0'
              aria-valuemin='0'
              aria-valuemax='100'
            ></div>
          </div>
        </div>
        <div className=' padding2vh '>
          <br></br>
          <center>
            <button
              onClick={() => history.push(`/funding/transfer/${params.id}`)}
              type='button'
              className=' btn btn-pink btn-lg btn-block col-lg-12'
            >
              Support
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default FunSummaryBox;
