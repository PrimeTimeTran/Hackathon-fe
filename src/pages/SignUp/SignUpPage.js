import React from "react";
import "./SignUp.style.css";
import "react-phone-number-input/style.css";
import { useState } from "react";
import AlertError from "../../components/AlertError";
import AlertSuccess from "../../components/AlertSuccess";
import SignUpForm from "../../components/SignUpForm";

const SignUpPage = () => {
  const [alert, setAlert] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <>
      <AlertError alert={alert} isSubmitted={isSubmitted} />
      <AlertSuccess success={success} />
      <SignUpForm setIsSubmitted={setIsSubmitted} setAlert={setAlert} />
    </>
  );
};

export default SignUpPage;
