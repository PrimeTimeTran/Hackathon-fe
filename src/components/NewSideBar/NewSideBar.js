import React, { useState } from "react";

import { Button, Card, Col, Modal, Form } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { formActions } from "../../redux/actions/form.actions";
import MainForm from "../Form/MainForm";
import "./NewSideBar.css";
import { useEffect } from "react";

const NewSideBar = ({ topBar, setAskShow, modalShow, setModalShow }) => {
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [geocode, setGeocode] = useState({
    lat: 10.77788992345464,
    lng: 106.69517319605292,
  });
  const [form, setForm] = useState({ phone: "", firstName: "" });
  const dispatch = useDispatch();

  const [showDonate, setShowDonate] = useState(false);
  const [receive, setReceive] = useState(false);
  const handleDonateClose = () => {
    setShowDonate(false);
  };
  const handleFormClose = () => {
    setShowForm(false);
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

  const handelSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));
    dispatch(formActions.submitPhone({ ...form, ...geocode }));
  };
  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const { t } = useTranslation();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        // console.log('Latitude is :', position.coords.latitude);
        setGeocode({ ...geocode, lat: position.coords.latitude });
        // console.log('Longitude is :', position.coords.longitude);
        setGeocode({ ...geocode, lng: position.coords.longitude });
      });
    }
  }, [geocode]);

  return (
    <>
      {modalShow ? (
        <Col className="Cl-SideBar">
          <Card className="cardSideBar">
            <Card.Header className="cardTitleTex">
              {" "}
              <strong>{t("want")}</strong>
            </Card.Header>
            <Card.Body>
              <div className="cardBotton">
                <Button variant="light" className="btn" onClick={handleShow}>
                  {t("give")}
                </Button>
                <br />
                <Button
                  variant="light"
                  className="btn"
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
      <Modal className="popup-modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modalsTitle">{t("want_to_give")}</Modal.Title>
        </Modal.Header>
        <Modal.Footer className="modalsFooter">
          <Button variant="light" className="buttonModal">
            {t("money")}
          </Button>
          <Button
            onClick={handleShowDonate}
            variant="light"
            className="buttonModal"
          >
            {t("food")}
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal className="popup-modal" show={receive} onHide={handleCloseReceive}>
        <Modal.Header closeButton>
          <Modal.Title className="modalsTitle"></Modal.Title>
          <Modal.Title className="modalsTitle">
            {t("want_to_receive")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer className="modalsFooter">
          <Button variant="light" className="buttonModal">
            {t("money")}
          </Button>
          <Button
            onClick={handleShowDonate}
            variant="light"
            className="buttonModal"
          >
            {t("food")}
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
          <Form onSubmit={handelSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{t("your_name")}</Form.Label>
              <Form.Control
                name="firstName"
                type="text"
                placeholder="Ví dụ: Nghi"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>{t("phone_number")}</Form.Label>
              <Form.Control
                name="phone"
                type="text"
                placeholder="Ví dụ: 09870xxxxx"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={() => {
                setShowDonate(false);
                setShowForm(true);
              }}
            >
              {t("next")}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      {/* Mainform */}
      <Modal
        show={showForm}
        onHide={handleFormClose}
        fullscreen="sm-down"
        contentClassName="form-modal-content"
        scrollable
      >
        <Modal.Body className="d-flex justify-content-center p-0 main-form-modal">
          <MainForm handleClose={handleFormClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NewSideBar;
