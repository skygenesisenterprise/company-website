// app/pages/licences.tsx
import React from 'react';
import styles from '../styles/licences.module.css';

const LicencesPage: React.FC = () => {
  return (
    <div className={styles.licencesContainer}>
      <h1>Licences</h1>
      <p>Voici les licences pour les différentes dépendances utilisées dans ce projet.</p>
      <ul>
        <li>React - MIT License</li>
        <li>Next.js - MIT License</li>
        <li>Express - MIT License</li>
        <li>Axios - MIT License</li>
        {/* Ajoutez d'autres licences ici */}
      </ul>
    </div>
  );
};

export default LicencesPage;