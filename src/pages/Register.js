import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Register() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('Password must be at least 6 characters long and contain at least one digit, one lowercase letter, and one uppercase letter.');
    } else if (password !== confirmPassword) {
      setPasswordError('Passwords do not match.');
    } else {
      setPasswordError('');
      console.log('Password is valid');
      navigate('/articles');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit} className="login-form">
        <h1>Register</h1>
        <p>Email ID</p>
        <input type="email" />
        <p>Password</p>
        <input type="password" value={password} onChange={handlePasswordChange} />
        <p>Confirm Password</p>
        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        {passwordError && <p className="error">{passwordError}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
