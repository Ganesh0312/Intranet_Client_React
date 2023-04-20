import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify"; // npm i react-toastify
import "react-toastify/dist/ReactToastify.css";
import { Carousel } from "react-bootstrap";
import { styled } from "@mui/material/styles";

const AddVideoForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [videos, setVideos] = useState([]);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      //formData.append("title", title);
      //formData.append("description", description);
      formData.append("id", id);
      formData.append("vedio", videoFile);
      const response = await axios.post("https://localhost:7274/api/Stories", formData);
      console.log(response);
      toast.success("Stories has been added");
      handleCloseModal();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get("https://localhost:7274/api/Stories");
        setVideos(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchVideos();
  }, []);

  const handleVideoFileChange = (event) => {
    setVideoFile(event.target.files[0]);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShowModal}>
        Add Stories
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {/*<Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </Form.Group>*/}
            <Form.Group>
              <Form.Label>Video File</Form.Label>
              <Form.Control type="file" onChange={handleVideoFileChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <br />
      <br />
      <br />
      <Carousel>
      {videos.map((video) => (
        <Carousel.Item key={video.id}>
          <div className="video-container">
            <video controls className=" w-80 h-70" height='70%'>
              <source src={video.vedioSrc} type="video/mp4" />
            </video>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
    </>
  );
};

export default AddVideoForm;
