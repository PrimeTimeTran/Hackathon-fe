import React, { useState } from "react";
import { Button, Card, Col, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { formActions } from "../../redux/actions/form.actions";
import MainForm from "../Form/MainForm";
import "./NewSideBar.css";
import { useHistory } from "react-router-dom";

const NewSideBar = ({ topBar, setAskShow, modalShow, setModalShow }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

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

  const { t } = useTranslation();

  return (
    <>
      {modalShow ? (
        <Col className='Cl-SideBar'>
          <Card className='cardSideBar'>
            <Card.Header className='cardTitleTex'>
              {" "}
              <strong>{t("want")}</strong>
            </Card.Header>
            <Card.Body>
              <div className='cardBotton'>
                <Button variant='light' className='btn' onClick={handleShow}>
                  {t("give")}
                </Button>
                <br />
                <Button
                  variant='light'
                  className='btn'
                  onClick={handleShowReceive}
                >
                  {t("receive")}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ) : (
        ""
      )}

      {/* modals donate */}
      <Modal className='popup-modal' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='modalsTitle'>{t("want_to_give")}</Modal.Title>
        </Modal.Header>
        <Modal.Footer className='modalsFooter'>
          <Button
            onClick={() => {
              history.push(`/funding`);
            }}
            variant='light'
            className='buttonModal'
          >
            {t("money")}
          </Button>
          <Button
            onClick={handleShowDonate}
            variant='light'
            className='buttonModal'
          >
            {t("food")}
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal className='popup-modal' show={receive} onHide={handleCloseReceive}>
        <Modal.Header closeButton>
          <Modal.Title className='modalsTitle'></Modal.Title>
          <Modal.Title className='modalsTitle'>
            {t("want_to_receive")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer className='modalsFooter'>
          <Button
            onClick={() => {
              history.push(`/request`);
            }}
            variant='light'
            className='buttonModal'
          >
            {t("money")}
          </Button>
          <Button
            onClick={handleShowDonate}
            variant='light'
            className='buttonModal'
          >
            {t("food")}
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={showDonate}
        onHide={handleDonateClose}
        fullscreen='sm-down'
        contentClassName='form-modal-content'
        scrollable
      >
        <Modal.Body className='d-flex justify-content-center p-0 main-form-modal'>
          <MainForm handleClose={handleDonateClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NewSideBar;
