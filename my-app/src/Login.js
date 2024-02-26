
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Login successful:', data);
        // Handle login success (e.g., storing the token, redirecting to another page)
      } else {
        console.error('Login failed:', data);
        // Handle errors (e.g., showing an error message)
      }
    } catch (error) {
      console.error('There was a network error!', error);
    }
  };

  return (
      <div className="container-fluid p-0">
        <div className="d-flex flex-column align-items-center justify-content-center"
             style={{minHeight: '100vh', background: '#282c34'}}>
          <div className="text-center mb-4">
          <h1 style={{ color: '#fff' }}>Inventory M-St</h1>
        </div>
            <div className="card p-4" style={{width: '320px'}}>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="username" placeholder="Username"/>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="password" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mb-2">LOGIN</button>
                </form>
                <button onClick={() => window.location.href = '/SignUp'} className="btn btn-primary w-100 mb-2">SignUp</button>
                <button onClick={() => window.location.href = '/'} className="btn btn-primary w-100">Main Page</button>
            </div>
        </div>
      </div>

  );
};
export default Login;
