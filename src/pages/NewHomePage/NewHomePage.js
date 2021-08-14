import React, { useEffect, useState } from "react";
import { Col, Container, Row, Tab, Tabs, Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ReciverPettion from "../../components/ReciverPettion/ReciverPettion";
import { useHistory } from "react-router-dom";
import { petitionActions } from "../../redux/actions/petition.actions";
import { formActions } from '../../redux/actions/form.actions';
import { ClipLoader } from "react-spinners";
import "./style.css";
import ProviderPetition from "../../components/ProviderPetition/ProviderPettion";
import PaginationBar from "../../components/PaginationBar/PaginationBar";
import NewSideBar from "../../components/NewSideBar/NewSideBar";
import MainForm from "../../components/Form/MainForm"


const NewHomePage = ({ handleClick }) => {
  const [pageNum, setPageNum] = useState(1);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    dispatch(formActions.changePage('index'));
  };

  const handleShow = () => setShow(true);

  const loading = useSelector((state) => state.petition.loading);
  const recivers = useSelector((state) => state.petition.recivers);
  const providers = useSelector((state) => state.petition.providers);
  const totalPageNum = useSelector((state) => state.petition.totalPageNum);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(petitionActions.receiverRequest(pageNum, 9));
    dispatch(petitionActions.providerRequest(pageNum, 9));
  }, [dispatch, pageNum]);

  const handleClickOnReciver = (id) => {
    history.push(`/petitions/${id}`);
  };

  const handleClickOnProvider = () => { };
  return (
    <>
      <Container>
        <div className="sideBar">
          {" "}
          <NewSideBar />
        </div>

        <div className="mainPage_Section">
          {loading ? (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "100vh" }}
            >
              <ClipLoader color="#f86c6b" size={150} loading={true} />
            </div>
          ) : (
            <div>
              <Container>
                <Tabs
                  defaultActiveKey="recivers"
                  id="uncontrolled-tab-example"
                  className="mb-3 "
                >
                  <Tab
                    eventKey="recivers"
                    title="Recivers"
                    className="tab-title"
                  >
                    {recivers.newPetitions?.length ? (
                      <>
                        {recivers.newPetitions.map((reciver) => (
                          <ReciverPettion
                            reciver={reciver}
                            handleClick={handleClickOnReciver}
                            key={reciver._id}
                            className="tab-container"
                          />
                        ))}
                      </>
                    ) : (
                      <p>There are no Reciver</p>
                    )}
                  </Tab>
                  <Tab eventKey="providers" title="Providers">
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
                      <p>There are no Reciver</p>
                    )}
                  </Tab>
                </Tabs>
                <Modal show={show} onHide={handleClose} fullscreen="sm-down" contentClassName="form-modal-content" scrollable>
                  {/* <Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header> */}
                  <Modal.Body className="d-flex justify-content-center p-0 main-form-modal">
                    {<MainForm handleClose={handleClose} />}
                  </Modal.Body>
                  {/* <Modal.Footer></Modal.Footer> */}
                </Modal>
                <div className="join-button">
                  <Button variant="dark" size="lg" onClick={handleShow}>
                    Tôi muốn tham gia
                  </Button>
                </div>
              </Container>
            </div>
          )}
        </div>
        <PaginationBar
          pageNum={pageNum}
          setPageNum={setPageNum}
          totalPageNum={totalPageNum}
          loading={loading}
        />
      </Container>
    </>
  );
};

export default NewHomePage;
