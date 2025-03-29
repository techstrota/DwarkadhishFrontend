import React, { useState } from 'react';
import axios from 'axios';
import { Card, Form, Button } from 'react-bootstrap';

function Invoices() {
  const [formData, setFormData] = useState({
    // Add all form fields here
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/invoices', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card>
      <Card.Header>Generate Invoice</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="bill_no" className="mb-3">
            <Form.Label>Bill No.</Form.Label>
            <Form.Control
              type="text"
              name="bill_no"
              value={formData.bill_no}
              onChange={handleChange}
            />
          </Form.Group>
          {/* Add more fields as needed */}
          <Button variant="primary" type="submit">
            Generate Invoice
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Invoices;