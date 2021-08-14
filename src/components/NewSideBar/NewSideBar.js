import React, { useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import "./NewSideBar.css";

const NewSideBar = ({ topBar, setAskShow, modalShow, setModalShow }) => {
  const [show, setShow] = useState(false);
  const [receive, setReceive] = useState(false);

  const handleClose = () => {
    if (setAskShow) {
      setAskShow(true);
    }
    setShow(false);
  };
  const handleCloseReceive = () => {
    if (setAskShow) {
      setAskShow(true);
    }
    setReceive(false);
  };

  const handleShow = () => {
    if (setAskShow) {
      setAskShow(false);
    }
    setShow(true);
  };
  const handleShowReceive = () => {
    if (setAskShow) {
      setAskShow(false);
    }
    setReceive(true);
  };
  return (
    <>
      {modalShow ? (
        <Col className="Cl-SideBar">
          <Card className="cardSideBar">
            <Card.Header className="cardTitleTex">
              {" "}
              <strong>You would like to... </strong>
            </Card.Header>
            <Card.Body>
              <div className="cardBotton">
                <Button variant="light" className="btn" onClick={handleShow}>
                  Donate
                </Button>
                <br />
                <Button
                  variant="light"
                  className="btn"
                  onClick={handleShowReceive}
                >
                  Receive
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ) : (
        ""
      )}

      {/* modals donate */}
      <Modal className="popup-modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modalsTitle">Want To Donate</Modal.Title>
        </Modal.Header>
        <Modal.Footer className="modalsFooter">
          <Button variant="light" className="buttonModal">
            Fund
          </Button>
          <Button variant="light" className="buttonModal">
            Food
          </Button>
        </Modal.Footer>
      </Modal>

      {/* modals receive */}
      <Modal className="popup-modal" show={receive} onHide={handleCloseReceive}>
        <Modal.Header closeButton>
          <Modal.Title className="modalsTitle">Want To Receive</Modal.Title>
        </Modal.Header>
        <Modal.Footer className="modalsFooter">
          <Button variant="light" className="buttonModal">
            Fund
          </Button>
          <Button variant="light" className="buttonModal">
            Food
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewSideBar;
