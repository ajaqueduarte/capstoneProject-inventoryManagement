import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Nav, Navbar, ListGroup } from 'react-bootstrap';

const Inventory = () => {
  const backgroundColor = '#f8f9fa'; 
  const [inventoryItems, setInventoryItems] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get('/api/inventory');
        setInventoryItems(response.data);
      } catch (error) {
        console.error("Error fetching inventory data:", error);
        
      }
    };

    fetchInventory();
})

  return (
    
    <div style={{ backgroundColor: backgroundColor, minHeight: '100vh' }}>

      {/* Top Navigation Bar */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">M-St</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#dashboard">Dashboard</Nav.Link>
              <Nav.Link href="#orders">Orders</Nav.Link>
              <Nav.Link href="#inventory">Inventory</Nav.Link>
              <Nav.Link href="#suppliers">Suppliers</Nav.Link>
              <Nav.Link href="#customers">Customers</Nav.Link>
              <Nav.Link href="#reports">Reports</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Side Navigation Bar and Main Content */}
      <Container fluid>
        <Row>
          {/* Side Navigation Bar */}
          <Col md={2} className="d-none d-md-block bg-light">
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="#overview">Overview</Nav.Link>
              <Nav.Link href="#stock-alerts">Stock Alerts</Nav.Link>
              <Nav.Link href="#stock-alerts">Out of Stock</Nav.Link>
              <Nav.Link href="#stock-alerts">Waste</Nav.Link>
              
            </Nav>
          </Col>

          {/* Main Content */}
          <Col md={10} style={{ padding: '20px' }}>
            <h2>Inventory</h2>
            <h4>Stock Alerts</h4>
            <ListGroup>
                {inventoryItems.map(item => (
                <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center" style={{ backgroundColor: '#f8f9fa' }}>
                {item.name}
                <span>
                {item.stock} in stock • {item.restockDays} days to restock
                </span>
            </ListGroup.Item>
                ))}
            </ListGroup>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default Inventory;
