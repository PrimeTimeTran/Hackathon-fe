import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./NewFooter.css";

const NewFooter = () => {
  return (
    <>
      <div className="container-footer">
        <div className="container">
          <div className="row">
            <div className="subBox1 col-3">© 2021 Jaguar Solution</div>
            <div className="col-7"></div>
            <div className="subBoxIcon col-2">
              <div className="iconFooter">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </div>
              <div className="iconFooter">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </div>
              <div className="iconFooter">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewFooter;
