import React, { useState } from 'react';
import SignUp from "./Signup";

const Main = () => {
  return (
      <div className="Main">
        <div className="header-bar">
          <h1>Inventory M-St</h1>
          <ul className="menu">
            <li><a href="/SignUp" className="menu-button">Sign Up</a></li>
            <li><a href="/Login" className="menu-button">Login</a></li>
            <li><a href="#footer" className="menu-button">Contact</a></li>
            <li><a href="/AboutUs" className="menu-button">About Us</a></li>
          </ul>
        </div>
        <hr></hr>
          <div className="main-content">

              <img src='/main-content.jpg' alt="main page"/>
          </div>
          <footer id="footer">
              <h2>Contact:</h2>
              <p>InventoryM-St@mst.com</p>
              <a href="https://github.com/ajaqueduarte" target="_blank" rel="noopener noreferrer">Click here for
                  demo</a>

              <p>&copy; 2024 Inventory M-St</p>
          </footer>
      </div>
  );
};

export default Main;