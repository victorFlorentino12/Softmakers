import React from "react";

import styles from './Logo.module.css';
import  logo  from '../../assets/logo-BLACK-removebg-preview 3.svg';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={ logo } alt="Logo Softamkers" />
    </div>
  )
}

export default Logo;