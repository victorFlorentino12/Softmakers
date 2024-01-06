import React, { useState } from 'react';
import { FaUserCircle, FaBell } from 'react-icons/fa';
import styles from './UserMenu.module.css'

const UserMenu = () => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div className={styles.user_menu}>
        <FaBell />
      <div className={styles.user_icon} onClick={toggleSubMenu}>
        <FaUserCircle />
      </div>
      {isSubMenuOpen && (
        <ul className={styles.submenu}>
          <li>Meu Perfil</li>
          <li>Biblioteca</li>
          <li>Soft Skills</li>
          <li>Hard Skills</li>
          <li>Logout</li>
        </ul>
      )}
    </div>
  );
};

export default UserMenu;
