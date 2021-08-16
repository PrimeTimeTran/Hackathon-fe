import React, { useState } from "react";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import Input from "react-phone-number-input";

const SignUpForm = ({ setIsSubmitted, setAlert }) => {
  const [phone, setPhone] = useState("");
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [media, setMedia] = useState("");

  const data = {
    fname: fname,
    lname: lname,
    email: email,
    password: password,
    phone: phone,
    media: media,
  };
  const [checked, setChecked] = useState(false);
  var myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dmgak3gru",
      uploadPreset: "jn245z5u",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
        setMedia(result.info.secure_url);
      }
    }
  );

  console.log("user data", data);

  const handleFName = (e) => {
    setFName(e.target.value);
  };

  const handleLName = (e) => {
    setLName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleCheck = (e) => {
    if (e.target.checked) {
      setChecked(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !fname ||
      !lname ||
      !email ||
      !email.includes("@") ||
      !password ||
      !phone ||
      phone.length !== 12 ||
      checked === false
    ) {
      setAlert(true);
    } else {
      setAlert(false);
      setIsSubmitted(true);
    }
  };

  return (
    <form
      className="formSignUp"
      style={{ display: "flex", flexDirection: "column" }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <h1
        style={{ color: "#ff4c68", marginBottom: "2rem", alignSelf: "center" }}
      >
        SIGN UP FOR FREE
      </h1>
      <TextField
        placeholder="Input your first name"
        id="outlined-basic"
        className="text-field"
        label="Username *"
        type="text"
        variant="outlined"
        onChange={handleFName}
      />{" "}
      <br />
      <TextField
        placeholder="Input your last name"
        id="outlined-basic"
        className="text-field"
        label="Username *"
        type="text"
        variant="outlined"
        onChange={handleLName}
      />{" "}
      <br />
      <TextField
        placeholder="Input your email"
        id="outlined-basic"
        className="text-field"
        label="Email *"
        type="email"
        variant="outlined"
        onChange={handleEmail}
      />{" "}
      <br />
      <TextField
        placeholder="Input your password"
        id="outlined-basic"
        className="text-field"
        label="Password *"
        type="password"
        variant="outlined"
        onChange={handlePassword}
      />{" "}
      <br />
      <div style={{ alignSelf: "flex-start" }}>Phone number</div>
      <Input
        defaultCountry="VN"
        international
        value={phone}
        onChange={setPhone}
      />{" "}
      <p style={{ fontSize: "small" }}>
        A valid phone number starts with Vietnam national code "+84" and must
        contain 11 digits (including national code).
      </p>{" "}
      <hr />
      <div> Upload your image</div>
      <button
        onClick={myWidget.open}
        id="upload_widget"
        className="cloudinary-button"
      >
        Upload files
      </button>
      <FormControlLabel
        control={
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            name="checkedH"
            onClick={handleCheck}
          />
        }
        label="I agree with the Term and Conditions."
      />{" "}
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          className="submit"
          type="submit"
          style={{ backgroundColor: "#ff4c68" }}
        >
          Submit
        </Button>

        <p>
          Already have account? <a href="/login">Log in now</a>
        </p>
      </div>
    </form>
  );
};
export default SignUpForm;
