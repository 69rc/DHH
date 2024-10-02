// AccountDetails.js
import React from 'react';
import { Container } from 'reactstrap';
import './accountDetails.css'; // Ensure this CSS file is present

function AccountDetails() {
  return (
    <Container className="account-details mt-5 pt-5">
      <h1 className="text-center">Payment Instructions</h1>
      <div className="details-section">
        <h2>Please Proceed:</h2>
        <p>
          Please ask your grant writer for payment details. 
          Provide the writer with your name as used on the form, 
          a screenshot of the payment, and your contact number.
        </p>
      </div>
    </Container>
  );
}

export default AccountDetails;
