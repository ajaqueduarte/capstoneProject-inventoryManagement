import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './js/Login';
import SignUp from './js/Signup';
import Main from './js/Main';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* Add other routes here */}
          <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
