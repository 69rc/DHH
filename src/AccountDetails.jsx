// AccountDetails.js
import React from 'react';
import { Container, Button } from 'reactstrap';
import './accountDetails.css'; // Ensure this CSS file is present

function AccountDetails() {
  // Replace with the actual account information or fetch from a backend
  const accountInfo = {
    accountHolder: "Grant Organization Name",
    bankName: "Example Bank",
    accountNumber: "123456789",
    routingNumber: "987654321",
    iban: "GB29NWBK60161331926819",
    swiftCode: "NWBKGB2L",
  };

  return (
    <Container className="account-details mt-5 pt-5">
      <h1 className="text-center">Account Details for Payment</h1>
      <div className="details-section">
        <h2>Send Payment To:</h2>
        <p><strong>Account Holder:</strong> {accountInfo.accountHolder}</p>
        <p><strong>Bank Name:</strong> {accountInfo.bankName}</p>
        <p><strong>Account Number:</strong> {accountInfo.accountNumber}</p>
        <p><strong>Routing Number:</strong> {accountInfo.routingNumber}</p>
        <p><strong>IBAN:</strong> {accountInfo.iban}</p>
        <p><strong>SWIFT Code:</strong> {accountInfo.swiftCode}</p>
      </div>
    </Container>
  );
}

export default AccountDetails;
