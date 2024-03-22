import React from 'react';
import { Container, Row, Col, Nav, Navbar, ListGroup } from 'react-bootstrap';


const Dashboard = () => {
    const backgroundColor = '#f8f9fa'; 

  return (
    <div style={{ backgroundColor: backgroundColor, minHeight: '100vh' }}>

    <div className="container-fluid p-0">
        <div className="d-flex flex-column align-items-center justify-content-center"
             style={{minHeight: '100vh', background: '#282c34'}}>
            <div className="text-center mb-4">
            <h1 style={{ color: '#fff' }}>Welcome to Inventory M-St</h1>
            </div>
            <div className="card p-4" style={{width: '320px'}}>
            <div className="mb-3">
                <h3>Dashboard</h3>
                <ul class='navagation'>
                    <li><a href='inventory/Inventory.js'>Inventory</a></li>
                    <li><a href='/Order.js'>Order</a></li>
                    <li><a href='/StockAlert.js'>Stock Alert</a></li>
                    <li><a href='/Reports.js'>Reports</a></li>
                    <li><a href='/Ingredients.js'>Indredients</a></li>
                    <li><a href='/Recipes.js'>Recipes</a></li>
                    <li><a href='/Settings.js'>Settings</a></li>
                </ul>
            </div>
            </div>


            
        </div>
  
    </div>
    </div>
    );  
};

export default Dashboard;
