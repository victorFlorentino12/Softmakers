import React, { useState } from 'react';
import { FaUserCircle, FaBell } from 'react-icons/fa';
import styles from './UserMenu.module.css'
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider/useAuth';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };
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
    
    <div className={styles.user_menu}>
        <FaBell />
      <div className={styles.user_icon} onClick={toggleSubMenu}>
        <FaUserCircle />
      </div>
      {isSubMenuOpen && (
        <ul className={styles.submenu}>
          
          <li> <Link className={styles.link}>Meu Perfil</Link></li>
          <li><Link to={'/library/76'} className={styles.link}>Biblioteca </Link></li>
          <li><Link to={'/softskills/76'} className={styles.link}>Soft Skills</Link></li>
          <li><Link to={'/hardskills/76'} className={styles.link}>Hard Skills</Link></li>
          <li onClick={handleLogout}>Logout</li>
         
        </ul>
      )}
    </div>
  );
};

export default UserMenu;
