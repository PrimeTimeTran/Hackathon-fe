import React, { useState } from "react";
import { Button, Card, Col, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { formActions } from "../../redux/actions/form.actions";
import MainForm from "../Form/MainForm";
import "./NewSideBar.css";

const NewSideBar = ({ topBar, setAskShow, modalShow, setModalShow }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const [showDonate, setShowDonate] = useState(false);
  const [receive, setReceive] = useState(false);
  const handleDonateClose = () => {
    setShowDonate(false);
    dispatch(formActions.changePage("index"));
  };
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
  const handleShowDonate = () => {
    if (setAskShow) {
      setAskShow(false);
    }
    setShowDonate(true);
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
              <strong>Bạn muốn </strong>
            </Card.Header>
            <Card.Body>
              <div className="cardBotton">
                <Button variant="light" className="btn" onClick={handleShow}>
                  Cho
                </Button>
                <br />
                <Button
                  variant="light"
                  className="btn"
                  onClick={handleShowReceive}
                >
                  Nhận
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
          <Modal.Title className="modalsTitle">Bạn muốn cho</Modal.Title>
        </Modal.Header>
        <Modal.Footer className="modalsFooter">
          <Button variant="light" className="buttonModal">
            Tiền
          </Button>
          <Button
            onClick={handleShowDonate}
            variant="light"
            className="buttonModal"
          >
            Thức ăn
          </Button>
        </Modal.Footer>
      </Modal>

      {/* modals receive */}
      <Modal className="popup-modal" show={receive} onHide={handleCloseReceive}>
        <Modal.Header closeButton>
          <Modal.Title className="modalsTitle">Bạn muốn nhận</Modal.Title>
        </Modal.Header>
        <Modal.Footer className="modalsFooter">
          <Button variant="light" className="buttonModal">
            Tiền
          </Button>
          <Button
            onClick={handleShowDonate}
            variant="light"
            className="buttonModal"
          >
            Thức ăn
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={showDonate}
        onHide={handleDonateClose}
        fullscreen="sm-down"
        contentClassName="form-modal-content"
        scrollable
      >
        <Modal.Body className="d-flex justify-content-center p-0 main-form-modal">
          <MainForm handleClose={handleDonateClose} />
        </Modal.Body>
        {/* <Modal.Footer></Modal.Footer> */}
      </Modal>
    </>
  );
};

export default NewSideBar;
