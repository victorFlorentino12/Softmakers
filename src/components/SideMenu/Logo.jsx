import React from "react";

import styles from './Logo.module.css';
import  logo  from '../../assets/softmakers_logo_black.svg';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={ logo } alt="Logo Softamkers" />
    </div>
  )
}

export default Logo;