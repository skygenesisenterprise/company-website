// app/pages/auth/login.tsx
import React, { useState } from 'react';
import axios from 'axios';
import styles from '../../styles/auth.module.css';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
      const response = await axios.post(`${apiUrl}/api/auth/login`, { email, password });

      if (response.status === 200) {
        // Store token and redirect
        localStorage.setItem('token', response.data.token);
        console.log('Login successful');
        // Redirect to home or dashboard
        window.location.href = '/';
      } else {
        setError('Login failed');
      }
    } catch (err) {
      const error = err as { response?: { data?: { message?: string } } };
      setError(error.response?.data?.message || 'An error occurred during login');
    }
  };

  return (
    <div className={styles.authContainer}>
      <h1>Login</h1>
      <form className={styles.authForm} onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default LoginPage;