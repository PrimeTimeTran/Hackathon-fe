import React from "react";
import { Button } from "react-bootstrap";
import "./Style.css";
import {
  FacebookShareButton,
  InstapaperShareButton,
  EmailShareButton,
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookShareCount,
} from "react-share";
function ShareBox() {
  return (
    <div className="grey-box col-lg-12 ">
      <center>
        <h5>Help for sharing</h5>
        <br></br>
        <div className="display-flex col-lg-8">
          <FacebookIcon size={32} round={true} />
          <FacebookMessengerIcon size={32} round={true} />
          <EmailIcon size={32} round={true} />
        </div>
      </center>
    </div>
  );
}

export default ShareBox;
