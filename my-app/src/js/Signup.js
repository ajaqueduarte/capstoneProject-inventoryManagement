

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // This should be at the top level of your component

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      const response = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Signup successful, you can now log in.');
        navigate('/login'); // Redirect to the login page
      } else  {
        console.error('Signup failed:', data);
        alert(`Signup failed: ${data.error}`);
        // Handle errors, maybe set an error message in state and display it
      }
    } catch (error) {
      console.error('There was a network error!', error);
      // Handle network errors, maybe set an error message in state and display it
    }
  };

  return (
    <div className="container-fluid p-0">
            <div className="d-flex flex-column align-items-center justify-content-center"
                 style={{minHeight: '100vh', background: '#282c34'}}>
        <div className="text-center mb-4">
          <h1 style={{ color: '#fff' }}>Sign Up for Inventory M-St</h1>
        </div>
                <div className="card p-4" style={{width: '320px'}}>
                    <form onSubmit={handleSignUp}>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="fullName" placeholder="Full Name"
                                   value={fullName}
                                   onChange={(e) => setFullName(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="email" placeholder="Email" value={email}
                                   onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="username" placeholder="Username"
                                   value={username}
                                   onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="password" placeholder="Password"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="confirmPassword"
                                   placeholder="Confirm Password" value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mb-2">SIGN UP</button>
                    </form>

                    <button onClick={() => navigate('/login')} className="btn btn-primary w-100 mb-2">Login</button>
                    <button onClick={() => navigate('/')} className="btn btn-primary w-100">Main Page</button>
                </div>
            </div>
    </div>
  );

};

export default SignUp;
