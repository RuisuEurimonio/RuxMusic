import React, { ButtonHTMLAttributes, useState } from 'react';
import Button from './components/button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event : any) => {
    event.preventDefault();
    // Lógica de autenticación aquí
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              {/* Usando el componente Button */}
              <Button type="submit" label="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
