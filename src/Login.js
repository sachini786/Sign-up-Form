import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function Login() {
  return (
    <div className="Login">
      <form>
        <div
          className="full-container"
          style={{
            backgroundColor: "#5c85d6",
            maxWidth: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="container"
            style={{
              maxWidth: "40vw",
              height: "95vh",
              justifyContent: "center",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "normal",
              borderRadius: "3vh",
              backgroundColor: " #f2f2f2",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <div>
              <h3
                style={{
                  textAlign: "initial",
                  paddingLeft: "5vh",
                  lineHeight: "1.8 ",
                  fontFamily: "Franklin Gothic Medium",
                }}
              >
                Sign Up
              </h3>
              <p
                style={{
                  textAlign: "initial",
                  paddingLeft: "5vh",
                  lineHeight: "1.8 ",
                }}
              >
                Please fill in this form to create an account
              </p>
              <hr
                class="line"
                style={{
                  borderTop: "0.3vh solid black",
                }}
              ></hr>
            </div>
            <div className="row">
              <div className="col" style={{ paddingLeft: "6vh" }}>
                <Form.Group controlId="Form.ControlInput1">
                  <Form.Label></Form.Label>
                  <Form.Control
                    type="text"
                    name="First Name"
                    placeholder="First Name"
                  />
                </Form.Group>
              </div>
              <div className="col" style={{ paddingRight: "5vh" }}>
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

            <Form.Group
              className="Email-input w-100 text-left"
              style={{
                paddingLeft: "4vh",
                paddingRight: "3vh",
              }}
            >
              <Form.Label></Form.Label>
              <Form.Control type="text" name="Email" placeholder="Email" />
            </Form.Group>
            <Form.Group
              className="password-input w-100 text-left"
              style={{
                paddingLeft: "4vh",
                paddingRight: "3vh",
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
              className="Cpassword-input w-100 text-left"
              style={{
                paddingLeft: "4vh",
                paddingRight: "3vh",
              }}
            >
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                name="Confirm Password"
                placeholder="Confirm Password"
              />
            </Form.Group>
            <div>
              <Form.Group
                className="record-input w-75 text-left"
                style={{
                  width: "100%",
                  paddingLeft: "4vh",
                  paddingRight: "3vh",
                  textAlign: "initial",
                  display: "flex",
                  wordSpacing: " 0.5vh",
                  justifyContent: "space-around",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                <Form.Check type="checkbox" label="I accept the " />
                <a href="/terms-of-use">Terms of Use</a>
                <span> and </span>
                <a href="/privacy-policy">Privacy Policy</a>
              </Form.Group>
            </div>

            <div
              className="text-left"
              style={{
                display: "flex",
                paddingLeft: "5vh",
              }}
            >
              <Button
                type="submit"
                style={{
                  width: "7rem",
                  height: "3.01rem",
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
