import React from "react";
import "./Style.css";
import {
  FacebookShareButton,
  EmailShareButton,
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
} from "react-share";
function ShareBox() {
  return (
    <div className="grey-box col-lg-12 ">
      <center>
        <h5>Help for sharing</h5>
        <br></br>
        <div className="display-flex col-lg-8">
          <FacebookShareButton
            url={"https://kenh14.vn/"}
            quote={"hahahah"}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <FacebookMessengerShareButton
            url={"https://kenh14.vn/"}
            appId="1027288664698578"
            className="Demo__some-network__share-button"
          >
            <FacebookMessengerIcon size={32} round />
          </FacebookMessengerShareButton>
          <EmailShareButton
            url={"https://kenh14.vn/"}
            subject={"Email"}
            body="body"
            className="Demo__some-network__share-button"
          >
            <EmailIcon size={32} round />
          </EmailShareButton>
        </div>
      </center>
    </div>
  );
}

export default ShareBox;
