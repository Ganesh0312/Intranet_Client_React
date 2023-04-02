import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import defaultDocImage from '../Images/images (1).png';

const Documents = () => {

  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:7274/api/Document").then((response) => {
      setDocuments(response.data);
    });
  }, []);

  return (
    <>
    <Navbar />
    <Sidebar />



    <Container>
    <h2 className="text-center mt-3">Document</h2>
      <Row>
        {documents.map((document) => (
          <Col sm={2} key={document.docID}>
            <Card className="mb-4 border-top-0 shadow" >
            <Card.Img variant="top" style={{ width: '100%', height: '200px', objectFit: 'cover' }} src={defaultDocImage} />
              <Card.Body>
                <Card.Title>{document.docName}</Card.Title>
                <a href={document.docSrc} target="_blank" rel="noreferrer">
                  View Document
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>


    </>
  )
}

export default Documents