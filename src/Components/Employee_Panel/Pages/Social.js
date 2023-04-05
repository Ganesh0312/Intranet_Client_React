//import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Image, Modal  } from 'react-bootstrap';

const Social = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get('https://localhost:7274/api/Images')
      .then(response => setImages(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleImageClick = (imagesrc) => {
    setSelectedImage(imagesrc);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };
  return (
    <>
    <Navbar />
    <Sidebar />


    <Container style={{ marginTop:'20px'}}>
    <h2 className="text-center mt-3" >Gallery</h2>
      <Row>
        {images.map((image) => (
          <Col key={image.id} xs={12} sm={6} md={4} lg={3}>
            <Image 
              src={image.imagesrc}
              alt={image.alt}
              style ={{cursor:'pointer', width: '100%', height: '200px', objectFit: 'cover' }}
              fluid
              onClick={() => handleImageClick(image.imagesrc)}
              className='rounded mb-4 border-top-0 shadows'
            />
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body style={{display: 'flex'}}>
          <Image style ={{ width: '100%', height: '100%', objectFit: 'cover' }} src={selectedImage} fluid />
        </Modal.Body>
      </Modal>
    </Container>
    </>
  )
}

export default Social