//import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './styles.css';
import { Card, Col, Container, Row } from 'react-bootstrap';

const People = () => {
  const [employees , setEmployee]=useState([]);

  useEffect (()=>{
    axios.get('https://localhost:7274/api/Employee')
    .then(Response=>{
      setEmployee(Response.data);
    })
    .catch(error =>{
      console.log(error);
    });
  }, []);

  return (
    <>
    <Navbar />
    <Sidebar />

    
    <Container>
    <h1 className="text-center my-4">           </h1>
    <Row xs={1} md={2} lg={6} className="g-4" >
      {employees.map(employee => (
        <Col key={employee.employeesID}>
          <Card className="h-100 border-top-0 shadow" style={{ width: '10rem'}}>
            <Card.Img variant="top" src={employee.imageSrc} className="card-img-top" alt={employee.employeeName} style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>{employee.employeeName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{employee.designation}</Card.Subtitle>
              <Card.Text>
                {/*<p>{employee.occupation}</p>
                <p>{employee.dob}</p>
                <p>{employee.mail}</p>*/}
                <p>{employee.department}</p>
                <p>{employee.mobile}</p>
                
                <p>{employee.dateOfJoin}</p>
                
              </Card.Text>
            </Card.Body>
          </Card>
          
        </Col>
        
      ))}
    </Row>
  </Container>

    </>
  )
}

export default People