import React, { useState } from "react";
import i18n from "i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./NewFooter.css";

const NewFooter = () => {
  const [language, setLanguage] = useState("en");

  const handleChangeLanguage = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  const languages = ["vi", "en"];
  return (
    <div className="container justify-content-around">
      <div className="d-flex flex-row justify-content-between p-5">
        <div className="d-flex">
          © 2021 Jaguar Solution
        </div>
        <div className="d-flex">
          {languages.map((l) => {
            return (
              <button
                value={l}
                className="btn btn-outline"
                onClick={handleChangeLanguage}
                style={{
                  color: language === l ? "#ff4c68" : "",
                }}
              >
                {l}
              </button>
            );
          })}
        </div>
        <div className="d-flex subBoxIcon">
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
  );
};

export default NewFooter;
