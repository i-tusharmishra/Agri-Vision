import React from 'react';
import styles from './AuthLayout.module.css';
import logo from '../assets/logo_eye.jpg'; // Your logo file

const AuthLayout = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.glassCard}>
        <img src={logo} alt="Agri Vision Logo" className={styles.logo} />
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;