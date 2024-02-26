import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './Login';
import SignUp from './Signup';
import Main from './Main';




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
