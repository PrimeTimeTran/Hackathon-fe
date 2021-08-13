import React, { useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import "./NewSideBar.css";

const NewSideBar = () => {
  const [show, setShow] = useState(false);
  const [receive, setReceive] = useState(false);

  const handleClose = () => setShow(false);
  const handleCloseReceive = () => setReceive(false);

  const handleShow = () => setShow(true);
  const handleShowReceive = () => setReceive(true);
  return (
    <div className="container">
      <Row>
        <Col xs={3} className="Cl-SideBar">
          <Card className="cardSideBar">
            <Card.Header className="cardTitleTex">
              {" "}
              <strong>You Want? </strong>
            </Card.Header>
            <Card.Body>
              <div className="cardBotton">
                <Button variant="success" className="btn" onClick={handleShow}>
                  Donate
                </Button>
                <br />
                <Button
                  variant="primary"
                  className="btn"
                  onClick={handleShowReceive}
                >
                  Receive
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* modals donate */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modalsTitle">Want To Donate</Modal.Title>
        </Modal.Header>
        <Modal.Footer className="modalsFooter">
          <Button variant="success" className="buttonModal">
            Fund
          </Button>
          <Button variant="primary" className="buttonModal">
            Food
          </Button>
        </Modal.Footer>
      </Modal>

      {/* modals receive */}
      <Modal show={receive} onHide={handleCloseReceive}>
        <Modal.Header closeButton>
          <Modal.Title className="modalsTitle">Want To Receive</Modal.Title>
        </Modal.Header>
        <Modal.Footer className="modalsFooter">
          <Button variant="success" className="buttonModal">
            Fund
          </Button>
          <Button variant="primary" className="buttonModal">
            Food
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NewSideBar;
