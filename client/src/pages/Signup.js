import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Don't forget: npm install axios
import AuthLayout from '../components/AuthLayout';
import styles from '../components/AuthLayout.module.css';
import { LanguageContext } from '../context/LanguageContext';

const Signup = () => {
  // EXTRACT 'language' HERE
  const { content, language } = useContext(LanguageContext); 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!"); 
      return;
    }

    try {
      // Send data to backend using Axios
      const response = await axios.post('http://13.50.224.214:5000/api/user/signup', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        lang: language // Sending the current language (e.g., 'hi', 'ta')
      });

      // Show the success message from backend
      alert(response.data.message); 
      navigate('/login');

    } catch (error) {
      // Show the error message from backend
      if (error.response) {
        alert(error.response.data.message);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <AuthLayout>
      <h2 className={styles.title}>{content.signupBtn}</h2> 
      <p className={styles.tagline}>{content.tagline}</p>

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>{content.nameLabel}</label>
          <input 
            type="text" 
            name="name" 
            placeholder={content.nameLabel}
            className={styles.input}
            onChange={handleChange}
            required
          />
        </div>

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

        <div className={styles.formGroup}>
          <label className={styles.label}>{content.confirmPass}</label>
          <input 
            type="password" 
            name="confirmPassword" 
            placeholder="••••••••"
            className={styles.input}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className={styles.primaryButton}>
          {content.signupBtn} &rarr;
        </button>
      </form>

      <div className={styles.footerText}>
        {content.hasAccount} 
        <Link to="/login" className={styles.link}>{content.linkLogin}</Link>
      </div>
    </AuthLayout>
  );
};

export default Signup;
