import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function Login() {
  return (
    <div className="Login">
      <form>
        <div
          className="form"
          style={{
            backgroundColor: "#5c85d6",
            maxWidth: "1500x",
            height: "1500px",
          }}
        >
          <div
            className="form"
            style={{
              maxWidth: "900px",
              height: "550px",
              margin: "0",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              transform: "translate(-50%, -50%)",

              borderRadius: "20px",
              backgroundColor: " #f2f2f2",
            }}
          >
            <h3
              style={{
                textAlign: "initial",
                paddingLeft: "30px",
                lineHeight: "1.8 ",
                fontFamily: "Franklin Gothic Medium",
              }}
            >
              Sign Up
            </h3>
            <p
              style={{
                textAlign: "initial",
                paddingLeft: "30px",
                lineHeight: "1.8 ",
              }}
            >
              Please fill in this form to create an account
            </p>
            <hr class="new1" style={{ borderTop: "2px solid black" }}></hr>
            <div className="row" style={{ marginBottom: "15px" }}>
              <div className="col" style={{ paddingLeft: "31px" }}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label></Form.Label>
                  <Form.Control
                    type="text"
                    name="First Name"
                    placeholder="First Name"
                  />
                </Form.Group>
              </div>
              <div className="col" style={{ paddingRight: "28px" }}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label></Form.Label>
                  <Form.Control
                    type="text"
                    name="Last Name"
                    placeholder="Last Name"
                  />
                </Form.Group>
              </div>
            </div>
            <Form.Group
              className="Email-input,mb-3 w-100 text-left"
              style={{
                paddingLeft: "20px",
                marginBottom: "10px",
                paddingRight: "16px",
              }}
            >
              <Form.Label></Form.Label>
              <Form.Control type="text" name="Email" placeholder="Email" />
            </Form.Group>
            <Form.Group
              className="password-input,mb-3 w-100 text-left"
              style={{
                paddingLeft: "20px",
                marginBottom: "10px",
                paddingRight: "16px",
              }}
            >
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                name="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group
              className="Cpassword-input,mb-3 w-100 text-left"
              style={{
                marginBottom: "25px",
                paddingLeft: "20px",
                paddingRight: "16px",
              }}
            >
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                name="Confirm Password"
                placeholder="Confirm Password"
              />
            </Form.Group>
            <Form.Group
              className="record-input,mb-3 w-75 text-left"
              style={{
                marginBottom: "25px",
                width: "100%",
                paddingLeft: "13px",
                textAlign: "initial",
                display: "flex",
                wordSpacing: " 3px",
              }}
            >
              <Form.Check type="checkbox" label="I accept the " />
              <a
                href="/terms-of-use"
                style={{ marginLeft: "3px", marginRight: "1px" }}
              >
                Terms of Use
              </a>
              <span style={{ marginRight: "2px" }}> and </span>
              <a href="/privacy-policy">Privacy Policy</a>
            </Form.Group>
            <div
              className="text-left"
              style={{
                display: "flex",
                paddingLeft: "20px",
              }}
            >
              <Button
                type="submit"
                style={{
                  width: "100px",
                  height: "45px",
                  fontFamily: "Arial black",
                  backgroundColor: "#5c85d6",
                }}
              >
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
