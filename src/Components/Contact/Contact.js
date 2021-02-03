import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "./Contact.css"

function Contact() {
    return (
        <div className="contact container pt-5">

            <Row className="text-center justify-content-center mb-4 section-heading">
                <h2>Contact Me</h2>
            </Row>
            <Row className="text-center justify-content-center mt-3 mb-5">
                <Col sm="6" md="3" className="p-4">
                
                   <a href="mailto:raghav_sharma@asu.edu" rel="noreferrer" target="_blank">
                   <i class="fas fa-at fa-4x"></i>
                    </a> 

               
                </Col>
                <Col sm="6" md="3" className="p-4">
                <a href="https://twitter.com/raghavmeche" rel="noreferrer" target="_blank">
                    
                    <i class="fab fa-twitter fa-4x"></i>
                    </a>
            
            
                </Col>
                <Col sm="6" md="3" className="p-4">
                <a href="https://www.linkedin.com/in/raghavsharma1993/"rel="noreferrer" target="_blank">
                    <i class="fab fa-linkedin fa-4x"></i>
                    
                    </a>
                 
            
                </Col>
                <Col sm="6" md="3" className="p-4">
                <a href="https://scholar.google.com/citations?user=qmnt5bgAAAAJ&hl=en"rel="noreferrer" target="_blank">
                    <i class="fas fa-graduation-cap fa-4x"></i>
                    
                    </a>
              
               
                </Col>
            </Row>
        </div>
    )
}

export default Contact
