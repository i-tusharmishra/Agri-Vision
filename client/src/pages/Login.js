import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthLayout from '../components/AuthLayout';
import styles from '../components/AuthLayout.module.css';
import { LanguageContext } from '../context/LanguageContext';

const Login = () => {
  // EXTRACT 'language' HERE
  const { content, language } = useContext(LanguageContext);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/api/user/login', {
        email: formData.email,
        password: formData.password,
        lang: language // Send language preference
      });

      // Save token and user info
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.result));

      alert(response.data.message);
      // Navigate to dashboard (we will create this next!)
      navigate('/dashboard'); 

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <AuthLayout>
      <h2 className={styles.title}>{content.welcome}</h2>
      <p className={styles.tagline}>{content.tagline}</p>

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>{content.emailLabel}</label>
          <input 
            type="email" 
            name="email"
            placeholder={content.emailPlace}
            className={styles.input}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>{content.passLabel}</label>
          <input 
            type="password" 
            name="password"
            placeholder="••••••••"
            className={styles.input}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className={styles.primaryButton}>
          {content.loginBtn} &rarr;
        </button>
      </form>

      <div className={styles.footerText}>
        {content.noAccount} 
        <Link to="/signup" className={styles.link}>{content.linkSignup}</Link>
      </div>
    </AuthLayout>
  );
};

export default Login;