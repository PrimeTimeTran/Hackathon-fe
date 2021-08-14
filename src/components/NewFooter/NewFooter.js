import React from "react";
import "./NewFooter.css";

const NewFooter = () => {
  return (
    <>
      <div className="container-footer">
        <div className="subBox1">© 2021 Jaguar Solution</div>
        <div className="subBoxIcon">
          <div className="iconFooter">
            <i class="fab fa-facebook-f"></i>
          </div>
          <div className="iconFooter">
            <i class="fab fa-twitter"></i>
          </div>
          <div className="iconFooter">
            <i class="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewFooter;
