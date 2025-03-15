'use client';

import React, { useState } from 'react';

export default function Register() {
  // State for form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Create an Account</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" style={{ width: '100%', padding: '8px' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" style={{ width: '100%', padding: '8px' }} />
        </div>

        <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007bff', color: '#fff' }}>
          Register
        </button>
      </form>

      <div style={{ marginTop: '10px' }}>
        <p>
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
}
