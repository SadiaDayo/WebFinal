import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import endpic from "../assets/images/ph.jpg";
import { useState } from "react";

function Contact() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
  });

  function submitInfo() {
    console.log(userInfo);
  }

  return (
    <>
      <div className="p-6">
        <h1>About PinPoint</h1>
        <div className="d-flex justify-content-center text-align-center ">
        <img  height={100}
          className="d-block w-10" src={endpic} alt="epic"></img></div>
        <div className="d-flex justify-content-center text-align-center mt-3">
        <p>
          Pinpoint is the fastest tracking and reservation software<br></br> solution for
          personal and enterprise vehicles for institutes, <br></br>offices and companies
          with live tracking, history recording,<br></br> estimated arrival time and
          usage report generation and much more features.
        </p><br></br>
        </div>
        <div className="d-flex justify-content-center text-align-center mt-2">
        <p>
          We ensure the best usage for vehicles tracking and reservation<br></br> system
          security with advance encryption standards and <br></br>capability of keeping
          your assets like car, points much more<br></br> secure with the live tracking
          system
        </p>
        </div>
      </div>

      <div style={{ backgroundColor: "#e5e5e5" }}>
        <h1>FeedBack Form</h1>
       
        <div className={"container p-4"}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter your name</Form.Label>
            <Form.Control
              value={userInfo.username}
              onChange={(e) =>
                setUserInfo({ ...userInfo, username: e.target.value })
              }
              type="text"
              placeholder="e.g John"
            />
    
            <Form.Text className="text-muted">
              Enter Name Here for Contact
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Button onClick={submitInfo} variant="dark">
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}

export default Contact;