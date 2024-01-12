import SoftSkillImg from './SoftSkillImg';
import styles from './TypeCard.module.css';
import Button from '../Button/Button';
import { NavLink } from "react-router-dom";

const TypeCard = ({text, to}) => {

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <SoftSkillImg />
      <div onClick={handleSubmit}>
        <NavLink to={to}>
          <Button text={text} background="#3C5E9B" buttonText="Soft Skills" padding="10px 80px" color="#f2f2f2" />
        </NavLink>
      </div>
    </div>
  )
}

export default TypeCard;