import React from 'react';
import { useAuth } from '../../context/AuthProvider/useAuth';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const auth = useAuth();
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      await auth.logout(); // Invoca a função logout corretamente
      navigate('/')
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <div>
      <p>Bem-vindo à Página Inicial</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
