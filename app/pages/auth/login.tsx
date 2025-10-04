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
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
      const response = await axios.post(apiUrl, { email, password });

      if (response.status === 200) {
        // Gérer la connexion réussie (par exemple, rediriger l'utilisateur)
        console.log('Login successful');
      } else {
        setError('Login failed');
      }
    } catch (err) {
      setError('An error occurred during login');
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