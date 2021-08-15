import React, { useEffect, useState } from "react";
import { Col, Container, Row, Tab, Tabs, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ReciverPettion from "../../components/ReciverPettion/ReciverPettion";
import { useHistory } from "react-router-dom";
import { formActions } from "../../redux/actions/form.actions";
import { mapActions } from "../../redux/actions/map.actions";

import "./style.css";
import ProviderPetition from "../../components/ProviderPetition/ProviderPettion";
import PaginationBar from "../../components/PaginationBar/PaginationBar";
import NewSideBar from "../../components/NewSideBar/NewSideBar";

import MarkerPopup from "../../components/NewMap/MarkerPopup";
import Map from "../../components/NewMap/Map";

import { petitionActions } from "../../redux/actions/petition.actions";
import "./style.css";

const NewHomePage = ({ handleClick }) => {
  const [pageNum, setPageNum] = useState(1);

  const [show, setShow] = useState(false);
  const [markerShow, setMarkerShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setMarkerShow(false);
    dispatch(formActions.changePage("index"));
  };
  const handleShow = () => setShow(true);

  const loading = useSelector((state) => state.petition.loading);
  const recivers = useSelector((state) => state.petition.recivers);
  const providers = useSelector((state) => state.petition.providers);
  const totalPageNum = useSelector((state) => state.petition.totalPageNum);
  const marker = useSelector((state) => state.map.selectedMarker);
  const dispatch = useDispatch();
  const history = useHistory();
  const [modalShow, setModalShow] = useState(true);

  useEffect(() => {
    dispatch(petitionActions.receiverRequest(pageNum, 9));
    dispatch(petitionActions.providerRequest(pageNum, 9));
  }, [dispatch, pageNum]);

  const handleClickOnReciver = (id) => {
    history.push(`/petitions/${id}`);
  };

  const handleClickOnProvider = () => {};
  return (
    <>
      <Container className="mt-5">
        <div className="col-4 d-lg-none addButton-wrap">
          <button class="addButton" onClick={handleShow}>
            +
          </button>
        </div>
        <Row className="d-flex justify-content-center">
          <div className="sideBar col-2 d-none d-lg-block ">
            {" "}
            <NewSideBar modalShow={modalShow} />
          </div>

          <div className="mainPage_Section col-10">
            <Row>
              <Col style={{ padding: "4rem", paddingTop: "2rem" }}>
                <h1>SOS map</h1>
                <h3>
                  Chung tay hỗ trợ bà con về nhu yếu phẩm để cùng nhau vượt qua
                  mùa dịch với tinh thần yêu thương chia sẻ!
                </h3>
              </Col>
              <Col>
                {recivers.newPetitions?.length &&
                providers.newPetitions?.length ? (
                  <div>
                    <Map
                      receivers={recivers}
                      providers={providers}
                      setMarkerShow={setMarkerShow}
                    />
                  </div>
                ) : (
                  ""
                )}

                <Modal
                  show={markerShow}
                  onHide={handleClose}
                  onExited={() => dispatch(mapActions.unselectMarker())}
                  fullscreen="sm-down"
                  contentClassName="form-modal-content"
                  scrollable
                >
                  <Modal.Body className="d-flex justify-content-center p-0 main-form-modal">
                    {marker.owner ? (
                      <MarkerPopup handleClose={handleClose} />
                    ) : (
                      <></>
                    )}
                  </Modal.Body>
                </Modal>
              </Col>
            </Row>
            <div>
              <Tabs
                defaultActiveKey="recivers"
                id="uncontrolled-tab-example"
                className="mb-3 d-flex justify-content-center"
              >
                <Tab
                  eventKey="recivers"
                  title="Người cần nhận"
                  className="tab-title"
                >
                  {recivers.newPetitions?.length ? (
                    recivers.newPetitions.map((reciver) => {
                      return (
                        <ReciverPettion
                          reciver={reciver}
                          handleClick={handleClickOnReciver}
                          key={reciver._id}
                          className="tab-container"
                        />
                      );
                    })
                  ) : (
                    <p>There are no Reciver</p>
                  )}
                </Tab>
                <Tab eventKey="providers" title="Người cần cho">
                  {providers.newPetitions?.length ? (
                    <>
                      {providers.newPetitions.map((provider) => (
                        <ProviderPetition
                          provider={provider}
                          handleClick={handleClickOnProvider}
                          key={provider._id}
                          className="tab-container"
                        />
                      ))}
                    </>
                  ) : (
                    <p>There are no Receiver</p>
                  )}
                </Tab>
              </Tabs>
            </div>
            {/* )} */}
          </div>
          <PaginationBar
            pageNum={pageNum}
            loading={loading}
            setPageNum={setPageNum}
            totalPageNum={totalPageNum}
          />
        </Row>
        <Modal
          show={show}
          onHide={handleClose}
          className="popup-modal"
          dialogClassName="model-dialog"
          contentClassName="model-content"
        >
          <Modal.Header closeButton></Modal.Header>
          <NewSideBar
            setModalShow={setShow}
            modalShow={modalShow}
            setAskShow={setModalShow}
          />
        </Modal>
      </Container>
    </>
  );
};

export default NewHomePage;
