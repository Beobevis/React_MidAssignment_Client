import React, { useState } from "react";
import ReactDOM from 'react-dom';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginPage.css";
import { loginService } from "../../Services/Service";

const validateEmail = (email) => {
  if (!email) return "Required";
  const isValidEmail = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  if (!isValidEmail) return "Invalid email";
  return "";
};
const validatePassword = (password) => {
  if (!password) return "Required";
  if (password.length <= 8) return "At least 8 characters required";
};
const LoginPage = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
    
  });
  const [checked,setChecked] = useState({checked: false});
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });
  const errors = {
    email: validateEmail(value.email),
    password: validatePassword(value.password),
  };
  console.log(errors);
  const handleInputChange = (evt) => {
    setValue({
      ...value,
      [evt.target.name]: evt.target.value,
    });
  };
  const isFormValid =
    errors.email || errors.password || checked.checked === false;
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("values: ", value);
  };

  ReactDOM.onSubmit = () => {
    loginService().then((response) => {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userID", response.data.userId);
      window.location.reload();
    });
  }

  const handleInputBlur = (evt) => {
    setTouched({
      ...touched,
      [evt.target.name]: true,
    });
  };
  const handleCheckedChange = (evt) => {
    setChecked({
        ...checked,
      [evt.target.name]: evt.target.checked,
    });
  };

  return (
    <div>
      <div className="login-page-div">
        <Form className="login-page-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={value.email}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {touched.email && (
              <Form.Text className="text-muted">{errors.email}</Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={value.password}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {touched.password && (
              <Form.Text className="text-muted">{errors.password}</Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onChange={handleCheckedChange}
              name="checked"
              checked={value.checked}
              type="checkbox"
              label="I have read agreement"
              id="checked"
            />
          </Form.Group>
          <Button
            disabled={isFormValid}
            onClick={handleSubmit}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
      
    </div>
  );
};

export default LoginPage;
