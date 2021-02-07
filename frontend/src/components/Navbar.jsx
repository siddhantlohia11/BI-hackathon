import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button, Modal } from "react-bootstrap";
import ImageUploader from "react-images-upload";
import axios from "axios";

function NavBar(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [image, setImage] = useState(null);
  const fileSelectHandler = (event) => {
    setImage(event.target.files[0])
  } 
  const fileUploadHandler = (event) => {
    console.log("aaya");
    console.log(image);
    const fd = new FormData();
    fd.append('image', image, image.name);
    axios.post("/api/upload/",fd)
    .then(res => {
      console.log(res.data);
    });
  } 
  
  return (
    <Navbar style={{ marginBottom: 20 }} bg="light" expand="lg">
      <Navbar.Brand href="#home">Team Name</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About us</Nav.Link>
          <Nav.Link href="#link">Contact us</Nav.Link>
        </Nav>
        <Form style={{ marginRight: 30 }} inline>
          <Button variant="primary" onClick={handleShow}>
            Upload
          </Button>
        </Form>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search Images"
            className="mr-sm-2"
            onChange={(event) => props.onChange(event.target.value)}
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ marginRight: "15px" }}>
            <input type="file" onChange={fileSelectHandler} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={fileUploadHandler}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}

export default NavBar;
