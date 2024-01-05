import React, { useState } from 'react';
import { message } from 'antd';
import { useAuth } from '../../context/AuthProvider/useAuth';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './Login.module.css';
import logo_login from '../../assets/logo_login.svg';
import img_for_login from '../../assets/img-for-login.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.authenticate(email, password);
      navigate('/home/76');
    } catch (error) {
      console.error('Invalid email or password');
      message.error('E-mail ou senha inválidos');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.apresentation}>
        <img src={logo_login} className={styles.logo_apresentation} alt="Logo" />
        <h1 className={styles.txt_apresentation}>BEM VINDO A</h1>
        <h1 className={styles.txt_apresentation_strong}>TRILHA DE APRENDIZAGEM</h1>
        <img src={img_for_login} className={styles.img_apresentation} alt="Presentation" />
      </div>
      <div className={styles.container_login}>
        <div className={styles.wrap_login}>
          <form className={styles.login_form} onSubmit={handleSubmit}>
            <span className={styles.login_from_title}>
              <h1>Login</h1>
            </span>

            <div className={styles.wrap_input}>
              <input
                type="email"
                className={email !== '' ? `${styles.has_val} ${styles.input}` : `${styles.input}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className={styles.focus_input} data-placeholder="Email"></span>
            </div>

            <div className={styles.wrap_input}>
              <input
                type="password"
                className={
                  password !== '' ? `${styles.has_val} ${styles.input}` : `${styles.input}`
                }
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className={styles.focus_input} data-placeholder="Password"></span>
            </div>
            <div className={styles.container_login_form_btn}>
              <Button text={'ENTRAR'} background="white" buttonText="Entrar" padding="10px 80px" color="#3C5E9B" />
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
