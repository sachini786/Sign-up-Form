import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
function Login() {
  return (
    <div className="Login">
      <form>
        <div className="full-container">
          <div className="container">
            <div>
              <h3>Sign Up</h3>
              <p>Please fill in this form to create an account</p>
              <hr class="line"></hr>
            </div>
            <div className="row">
              <div className="col">
                <Form.Group controlId="Form.ControlInput1">
                  <Form.Label></Form.Label>
                  <Form.Control
                    type="text"
                    name="First Name"
                    placeholder="First Name"
                  />
                </Form.Group>
              </div>
              <div className="col">
                <Form.Group controlId="Form.ControlInput1">
                  <Form.Label></Form.Label>
                  <Form.Control
                    type="text"
                    name="Last Name"
                    placeholder="Last Name"
                  />
                </Form.Group>
              </div>
            </div>

            <Form.Group className="Email-input w-100 text-left">
              <Form.Label></Form.Label>
              <Form.Control type="text" name="Email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="password-input w-100 text-left">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                name="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="Cpassword-input w-100 text-left">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                name="Confirm Password"
                placeholder="Confirm Password"
              />
            </Form.Group>
            <div>
              <Form.Group className="record-input w-75 text-left">
                <Form.Check type="checkbox" label="I accept the " />
                <a href="/terms-of-use">Terms of Use</a>
                <span> and </span>
                <a href="/privacy-policy">Privacy Policy</a>
              </Form.Group>
            </div>

            <div className="text-left">
              <Button className="button" type="submit">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Login;
