import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import NumberFormat from "react-number-format";
import Imgupload from "../Imgupload/Imgupload";
import "./FundRequestInfo.css";

function FundRequestInfo() {
  // const dispatch = useDispatch();
  const [state, setState] = useState({
    donation: "",
    fname: "",
    lname: "",
    email: "",
    city: "",
    bankName: "",
    bankBranch: "",
    bankNumber: "",
    ownerName: "",
    description: "",
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
    <div className="rqForm">
      <div className="py-4">
        <div className="container px-5 my-5">
          <Row className="justify-content-md-center">
            <Col xs={12} md={8} C="container-border-Transfer">
              <div className=""></div>
              <div>
                <div className="padding2vw">
                  <Form.Label>Your First Name (required)</Form.Label>
                  <InputGroup className="mb-3">
                    <FormControl
                      className="formControl"
                      placeholder="e.g: Minh"
                      aria-label="Recipient's First Name"
                      onChange={(e) =>
                        setState({ ...state, fname: e.target.value })
                      }
                    />
                  </InputGroup>
                  <Form.Label>Your Last Name (required)</Form.Label>
                  <InputGroup className="mb-3">
                    <FormControl
                      className="formControl"
                      placeholder="e.g: Nguyen"
                      aria-label="Recipient's Last Name"
                      onChange={(e) =>
                        setState({ ...state, lname: e.target.value })
                      }
                    />
                  </InputGroup>
                </div>
                <Form.Label> Your Email address (required)</Form.Label>
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
                    placeholder="e.g: Ho Chi Minh"
                    aria-label="Recipient's city"
                    onChange={(e) =>
                      setState({ ...state, city: e.target.value })
                    }
                  />
                </InputGroup>
                <Form.Label>Your Bank (required)</Form.Label>
                <InputGroup className="mb-3">
                  <FormControl
                    className="formControl"
                    placeholder="e.g: Shinhan Bank"
                    aria-label="Recipient's Bank"
                    onChange={(e) =>
                      setState({ ...state, bankName: e.target.value })
                    }
                  />
                </InputGroup>
                <Form.Label>Your Branch (required)</Form.Label>
                <InputGroup className="mb-3">
                  <FormControl
                    className="formControl"
                    placeholder="e.g: Dong Da Branch"
                    aria-label="Recipient's Bank Branch"
                    onChange={(e) =>
                      setState({ ...state, bankBranch: e.target.value })
                    }
                  />
                </InputGroup>
                <Form.Label>
                  Your Account Number (required - only numbers no signs please!)
                </Form.Label>
                <InputGroup className="mb-3">
                  <FormControl
                    className="formControl"
                    placeholder="Please fill in your account number"
                    aria-label="Recipient's Account Number"
                    onChange={(e) =>
                      setState({ ...state, bankNumber: e.target.value })
                    }
                  />
                </InputGroup>
                <Form.Label>Account Holder (required)</Form.Label>
                <InputGroup className="mb-3">
                  <FormControl
                    className="formControl"
                    placeholder="e.g: Minh Tam Thi Nguyen"
                    aria-label="Account Holder Name"
                    onChange={(e) =>
                      setState({ ...state, ownerName: e.target.value })
                    }
                  />
                </InputGroup>

                <Form.Label>
                  Please, explain the reason for your request
                </Form.Label>
                <InputGroup className="mb-3 ">
                  <FormControl
                    as="textarea"
                    className="textarea formControl"
                    placeholder="e.g: I lost my job due to covid..."
                    onChange={(e) =>
                      setState({ ...state, description: e.target.value })
                    }
                  />
                </InputGroup>
              </div>
              <div className="greenBox">
                <Form.Label>
                  <b>How much money would you like to request?</b>
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
                          a = parseFloat(e.target.value.replace(/VND|,/g, ""));
                          setState({ ...state, donation: a });
                        }}
                      />
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="verificationButtons">
                <Imgupload className="rightButton rqButton" />
                <Button
                  variant=""
                  className="btn-primary-t leftButton rqButton"
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
