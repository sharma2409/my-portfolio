import './App.css';
import React,{ useEffect } from "react";
import { Row,Col } from "react-bootstrap";
import  LandingPage  from "./Components/LandingPage/LandingPage";
import  About  from "./Components/About/About";
import Work from './Components/Work/Work';
import Contact from "./Components/Contact/Contact";

function App() {
  useEffect(() => {
    window.addEventListener('scroll',() => {
      if(window.scrollY > 10){
            document.querySelector('.header').style.backgroundColor = 'rgb(24,24,24,0.9)';
          }
          else{
            document.querySelector('.header').style.backgroundColor = 'transparent';
      
          }
    })
  }, [window.scrollY])

  
  return (
    <div className="App">

      {/* Header */}
      <header className="w-100 py-3 px-4 header">
        <Row>
          <Col>
            <div className="brand">
              <p>R</p>
            </div>
          </Col>
          <Col className="d-flex justify-content-md-end align-items-center justify-content-center">
            <ul style={{ textDecoration: "none", listStyle: "none", maxWidth:"300px" }} className="d-flex m-0 p-0">
              <li>About</li>
              <li className="ml-5">Work</li>
              <li className="ml-5">Contact</li>
            </ul>
          </Col>
        </Row>
        
      </header>

      {/* Landing Page */}
      <LandingPage />
      {/* About section */}
      <About />
      {/* Work */}
      <Work />
      {/* Contact */}
      <Contact />
      {/* Footer */}

    </div>
  );
}

export default App;
