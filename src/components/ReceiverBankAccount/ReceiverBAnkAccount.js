import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
import "./Style.css";
import NumberFormat from "react-number-format";
import Imgupload from "../Imgupload/Imgupload";
// import { useParams } from "react-router-dom";

// import { getDonationRequest } from "../../redux/DonationRequest/DonationRequestAction";

function ReceiverBankAccount() {
  // const dispatch = useDispatch();
  const [state, setState] = useState({
    donation: "",
    name: "",
    email: "",
    Message: "",
  });
  // const { id } = useParams();

  // useEffect(() => dispatch(getDonationRequest(id)), []);
  // const { media, need, amount_remaining, receiver, details, createdAt } =
  //   useSelector((state) => state.requestDetail.donationRequest);

  let a;
  const handleOnclick = (e) => {
    // e.preventDefault();
    // if (state.donation >= 10000) {
    //   dispatch(toastSuccess(state));
    // } else {
    //   dispatch(toastFail(state));
    // }
  };
  console.log("checkstate", state);
  return (
    <div className='rqForm'>
      <div className='py-4'>
        <div className='container px-5 my-5'>
          <Row className='justify-content-md-center'>
            <Col xs={12} md={8} C='container-border-Transfer'>
              <div className=''>
                <Card>
                  <Row>
                    <Col xs={12} md={4}>
                      <Card.Img
                        variant='top'
                        style={{ height: "30vh" }}
                        // src={media}
                      />
                    </Col>
                    <Col xs={12} md={8}>
                      <h5 style={{ color: "grey" }} className='padding2vw'>
                        Your supporting donation will benefit
                        {/* {receiver && receiver.name} */}
                      </h5>
                      {/* <p> {details} </p> */}
                      <div>Bank : ACB</div>
                      <dic>Bank Account: 163287498xxx</dic>
                    </Col>
                  </Row>
                </Card>
              </div>
              <div>
                <div className='greenBox'>
                  <Form.Label>
                    <b>Please, input your donation amount </b>
                  </Form.Label>
                  <div>
                    <Row>
                      <Col>
                        <NumberFormat
                          className='mb-3 numberBox '
                          thousandSeparator={true}
                          suffix={" VND"}
                          placeholder='e.g: 300.000 VND'
                          onChange={(e) => {
                            a = parseFloat(
                              e.target.value.replace(/VND|,/g, "")
                            );
                            setState({ ...state, donation: a });
                          }}
                        />
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className='padding2vw'>
                  <Form.Label>Your Name (required)</Form.Label>
                  <InputGroup className='mb-3'>
                    <FormControl
                      className='formControl'
                      placeholder='e.g: Phuong Ha'
                      aria-label="Recipient's username"
                      onChange={(e) =>
                        setState({ ...state, name: e.target.value })
                      }
                    />
                  </InputGroup>
                </div>
                <Form.Label>Your Email address (optional)</Form.Label>
                <InputGroup className='mb-3'>
                  <FormControl
                    className='formControl'
                    placeholder='Please input you email address'
                    aria-label="Recipient's username"
                    onChange={(e) =>
                      setState({ ...state, email: e.target.value })
                    }
                  />
                </InputGroup>
                <p>
                  You will receive gratitude messages and latest updates
                  regarding the project you support
                </p>
                <Form.Label>Write a support comment</Form.Label>
                <InputGroup className='mb-3 '>
                  <FormControl
                    as='textarea'
                    className='textarea   formControl'
                    placeholder='e.g: I hope you will get better soon!'
                    onChange={(e) =>
                      setState({ ...state, message: e.target.value })
                    }
                  />
                </InputGroup>
              </div>
              <ul className='greenBox support'>
                When you support
                <li>Your name will be posted in supporters list.</li>{" "}
                <li>You can receive gratitude messages.</li>
              </ul>
              <div>
                Please confirm that you have successfully transferred the money
                to the receiver account
              </div>
              <div className='verificationButtons'>
                <Imgupload className='rightButton' />
                <Button
                  variant=''
                  className='btn-primary-t leftButton'
                  onClick={handleOnclick}
                >
                  Transferred
                </Button>{" "}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default ReceiverBankAccount;
