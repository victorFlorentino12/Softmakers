import React from "react";

import styles from './SoftSkillImg.module.css';
import  softImg  from '../../assets/soft_skills_img.svg';

const SoftSkillImg = () => {
  return (
    <div className={styles.softImg}>
      <img src={ softImg } alt="Imagem Soft Skills" />
    </div>
  )
}

export default SoftSkillImg;