import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "./Contact.css"

function Contact() {
    return (
        <div className="contact container pt-5">

            <Row className="text-center justify-content-center mb-4">
                <h3 className="color">Contact With Me</h3>
            </Row>
            <Row className="text-center justify-content-center mt-3 mb-5">
                <Col>
                
                   <a href="raghav_sharma@asu.edu"rel="noreferrer" target="_blank">
                   <i class="fas fa-at fa-4x"></i>
                    </a> 

               
                </Col>
                <Col>
                <a href="https://twitter.com/raghavmeche" rel="noreferrer" target="_blank">
                    
                    <i class="fab fa-twitter fa-4x"></i>
                    </a>
            
            
                </Col>
                <Col>
                <a href="https://www.linkedin.com/in/raghavsharma1993/"rel="noreferrer" target="_blank">
                    <i class="fab fa-linkedin fa-4x"></i>
                    
                    </a>
                 
            
                </Col>
                <Col>
                <a href="https://scholar.google.com/citations?user=qmnt5bgAAAAJ&hl=en"rel="noreferrer" target="_blank">
                    <i class="fas fa-graduation-cap fa-4x"></i>
                    
                    </a>
              
               
                </Col>
            </Row>
        </div>
    )
}

export default Contact
