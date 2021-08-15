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
import NumberFormat from "react-number-format";
import Imgupload from "../Imgupload/Imgupload";

function FundRequestInfo() {
  // const dispatch = useDispatch();
  const [state, setState] = useState({
    donation: "",
    name: "",
    email: "",
    story: "",
    anonymousMode: "",
    city: "",
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
    <div>
      <div className="py-4">
        <div className="container px-5 my-5">
          <Row className="justify-content-md-center">
            <Col xs={12} md={8} C="container-border-Transfer">
              <div className=""></div>
              <div>
                <div className="padding2vw">
                  <Form.Label>Your Name(required)</Form.Label>
                  <InputGroup className="mb-3">
                    <FormControl
                      className="formControl"
                      placeholder="e.g:Minak Mingu"
                      aria-label="Recipient's username"
                      onChange={(e) =>
                        setState({ ...state, name: e.target.value })
                      }
                    />
                  </InputGroup>
                </div>
                <Form.Label> Your Email address (optional)</Form.Label>
                <InputGroup className="mb-3">
                  <FormControl
                    className="formControl"
                    placeholder="Please input your email address"
                    aria-label="Recipient's username"
                    onChange={(e) =>
                      setState({ ...state, email: e.target.value })
                    }
                  />
                </InputGroup>
                <Form.Label>Your City (required)</Form.Label>
                <InputGroup className="mb-3">
                  <FormControl
                    className="formControl"
                    placeholder="e.g:Ho Chi Minh"
                    aria-label="Recipient's city"
                    onChange={(e) =>
                      setState({ ...state, city: e.target.value })
                    }
                  />
                </InputGroup>
                <p>
                  You will receive gratitude messages and latest updates
                  regarding the project you support
                </p>
                <Form.Label>Describe why you request the money</Form.Label>
                <InputGroup className="mb-3 ">
                  <FormControl
                    as="textarea"
                    className="textarea formControl"
                    placeholder="e.g: My grandma is in the hospital.."
                    onChange={(e) =>
                      setState({ ...state, story: e.target.value })
                    }
                  />
                </InputGroup>
              </div>
              <div className="greenBox">
                <Form.Label>
                  <b>How much do you need?</b>
                </Form.Label>
                <div>
                  <Row>
                    <Col>
                      <NumberFormat
                        className="mb-3 numberBox "
                        thousandSeparator={true}
                        suffix={" VND"}
                        placeholder="e.g: 300.000 VND"
                        onChange={(e) => {
                          a = parseFloat(e.target.value.replace(/\VND|,/g, ""));
                          setState({ ...state, donation: a });
                        }}
                      />
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="verificationButtons">
                <Imgupload className="rightButton" />
                <Button
                  variant=""
                  className="btn-primary-t leftButton"
                  onClick={handleOnclick}
                >
                  Complete
                </Button>{" "}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default FundRequestInfo;
