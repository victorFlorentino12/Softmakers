import React from "react";

import styles from './HardSkillImg.module.css';
import  hardImg  from '../../assets/hard_skills_img.svg';

const SoftSkillImg = () => {
  return (
    <div className={styles.softImg}>
      <img src={ hardImg } alt="Imagem Hard Skills" />
    </div>
  )
}

export default SoftSkillImg;