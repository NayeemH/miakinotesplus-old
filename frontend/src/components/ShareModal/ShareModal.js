import React, { useEffect, useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";

const ShareModal = ({ show, setShow, title, id }) => {
  const handleClose = () => setShow(false);
  const [email, setEmail] = useState("");
  const [validated, setValidated] = useState(true);
  const [status, setStatus] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {}, [userInfo]);
  //SUBMIT FORM
  const submitHandeler = async (e) => {
    e.preventDefault();

    const res = await axios.post(`/api/notes/share/${id}`, {
      author: userInfo._id,
      email,
    });
    if (res.status === 201) {
      setStatus("Email sent successfully");
    } else {
      setStatus("Email not sent");
    }
  };

  //EMAIL VALIDATION
  const handleChange = (e) => {
    //Email validation regex
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const regex = new RegExp(emailRegex);
    if (regex.test(e.target.value)) {
      setValidated(true);
    } else {
      setValidated(false);
    }
    setEmail(e.target.value);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        backdropClassName="backdrop__bg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitHandeler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => handleChange(e)}
                placeholder="Enter email"
                required
                {...(validated ? { isValid: true } : { isInvalid: true })}
              />
              <Form.Text className="text-muted">
                We will send invitation to this email address.
              </Form.Text>
            </Form.Group>
            {status === "Email not sent" && (
              <Alert variant="danger" className="text-center">
                Email not sent
              </Alert>
            )}
            {status === "Email sent successfully" && (
              <Alert variant="success" className="text-center">
                Email sent successfully
              </Alert>
            )}

            <Button variant="primary" type="submit" className="mr-3">
              Submit
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ShareModal;
