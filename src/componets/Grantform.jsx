import React, { useState } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import './grantForm.css';

function GrantForm() {
  const [submitted, setSubmitted] = useState(false);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toggleModal(); // Open the modal when submitted
  };

  const toggleModal = () => setModal(!modal);

  const handleProceedToPayment = () => {
    navigate('/account-details');
  };

  return (
    <Container className="grant-form mt-5 pt-5">
      <h1 className="text-center mb-4">Grant Application Registration / Data Form</h1>
      
      {!submitted ? (
        <Form onSubmit={handleSubmit}>
          {/* Personal Information */}
          <h2>Personal Information</h2>
          <FormGroup>
            <Label for="fullname">Full Name</Label>
            <Input type="text" name="fullname" id="fullname" placeholder="Your full name" required />
          </FormGroup>
          <FormGroup>
            <Label for="contactNumber">Contact Number</Label>
            <Input type="tel" name="contactNumber" id="contactNumber" placeholder="Your contact number" required />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email Address</Label>
            <Input type="email" name="email" id="email" placeholder="Your email" required />
          </FormGroup>
          <FormGroup>
            <Label for="mailingAddress">Mailing Address</Label>
            <Input type="text" name="mailingAddress" id="mailingAddress" placeholder="Your mailing address" required />
          </FormGroup>

          {/* Demographic Information */}
          <h2>Demographic Information</h2>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input type="number" name="age" id="age" placeholder="Your age" required />
          </FormGroup>
          <FormGroup>
            <Label for="gender">Gender</Label>
            <Input type="select" name="gender" id="gender" required>
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="ethnicity">Ethnicity</Label>
            <Input type="text" name="ethnicity" id="ethnicity" placeholder="Your ethnicity" required />
          </FormGroup>

          {/* Education and Employment */}
          <h2>Education and Employment</h2>
          <FormGroup>
            <Label for="highestEducation">Highest Education Level</Label>
            <Input type="text" name="highestEducation" id="highestEducation" placeholder="Your highest education level" required />
          </FormGroup>
          <FormGroup>
            <Label for="employmentStatus">Current Employment Status</Label>
            <Input type="select" name="employmentStatus" id="employmentStatus" required>
              <option value="">Select...</option>
              <option value="employed">Employed</option>
              <option value="unemployed">Unemployed</option>
              <option value="student">Student</option>
              <option value="retired">Retired</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="employer">Employer</Label>
            <Input type="text" name="employer" id="employer" placeholder="Your employer's name" required />
          </FormGroup>

          {/* Previous Grant Experience */}
          <h2>Previous Grant Experience</h2>
          <FormGroup>
            <Label for="previousGrants">List any previous grants received (including the granting organization and project title)</Label>
            <Input type="textarea" name="previousGrants" id="previousGrants" placeholder="Details of previous grants" required />
          </FormGroup>

          {/* Declaration */}
          <h2>Declaration</h2>
          <p>
            I, <Input type="text" name="declarantName" placeholder="Your name" required /> affirm that the information provided in this registration form is accurate, and I agree to comply with the terms and conditions set forth by the granting organization.
          </p>

          <Button color="primary" type="submit" className="mt-3 btns">Submit Application</Button>
        </Form>
      ) : null}

      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Thank You!</ModalHeader>
        <ModalBody>
          <h2>Your application has been submitted successfully.</h2>
          <p>Would you like to proceed to payment?</p>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={handleProceedToPayment}>Proceed to Payment of $150.</Button>
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default GrantForm;
