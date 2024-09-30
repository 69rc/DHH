import React, { useState } from 'react';
import { Row, Container, Button, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useNavigate } from 'react-router-dom'; // Updated import
import './home.css';
import About from '../about/about';
import Service from '../services/services';
import Features from '../features/features';
import Teem from '../teem/teem';
import Contact from "../contact/contact";

function Home() {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate(); // Updated from useHistory

  const toggle = () => setModal(!modal);

  const handleApply = (type) => {
    if (type === 'guaranty') {
      navigate('/grant-form'); // Updated to use navigate
    }
    toggle(); // Close the modal
  };

  return (
    <>
      <div className='home'>
        <section className="hero">
          <Container className="hero-content">
            <Row>
              <Col>
                <h1 className='head'>Apply for Your Grant Opportunity</h1>
                <p className='head2 text-white'>
                  Every eligible individual or organization can apply for our funding grants.
                </p>
                <p className='head2 text-white'>
                  Our grants are designed to support projects that make a meaningful impact in the community. 
                  Whether you're working on education, health, or social initiatives, we encourage you to apply.
                  Your application for funding is completely free – there are no hidden fees or costs involved. 
                  Please allow a few weeks for processing and notifications regarding your application status.
                </p>
                <Button className='btns' onClick={toggle}>Submit Your Grant Application</Button>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Modal for Guaranty Type Selection */}
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Choose Your Application Type</ModalHeader>
          <ModalBody>
            <p>Do you want to apply for Guaranty or Non-Guaranty?</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => handleApply('guaranty')}>Guaranty</Button>
            <Button color="secondary" onClick={() => handleApply('non-guaranty')}>Non-Guaranty</Button>
            <Button color="light" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
      <About />
      <Service />
      <Features />
      <Teem />
      <Contact />
    </>
  );
}

export default Home;
