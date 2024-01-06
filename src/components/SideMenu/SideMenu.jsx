import { FaBars, FaHouse, FaUser, FaBook, FaXmark, FaHandHoldingHeart, FaHandshake, FaScrewdriverWrench, FaEnvelope, FaRightFromBracket } from "react-icons/fa6";
import Logo from "./Logo"; 

import { NavLink } from "react-router-dom";

import styles from "./SideMenu.module.css"
import { useState } from "react";
import { useAuth } from '../../context/AuthProvider/useAuth';
import { useNavigate } from 'react-router-dom';

const SideMenu = ({children}) => {

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

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path:"/home/76",
      name: "Home",
      icon:<FaHouse />
    },
    {
      path:"/profile",
      name: "Perfil",
      icon: <FaUser />
    },
    {
      path:"/messages",
      name: "Mensagens",
      icon: <FaEnvelope />
    },
    {
      path:"/softskills/76",
      name: "SoftSkills",
      icon: <FaHandshake />
    },
    {
      path:"/hardskills/76",
      name: "HardSkills",
      icon: <FaScrewdriverWrench />
    },
    {
      path:"/library/76",
      name: "Biblioteca",
      icon: <FaBook />
    },
    {
      path:"/",
      name: "Sair",
      icon: <FaRightFromBracket />
    }
  ]

  return (
    <div className={styles.menu_container}>
      <div style={{width: isOpen ? "200px" : "70px"}} className={styles.sidebar}>
        <div className={styles.top_section}>
          <h1 style={{margin: isOpen ? "0 auto" : "0 0"}} className={styles.logo}><Logo /></h1>
        </div>
          <div className={styles.bars}>
            {
              isOpen ? <FaXmark onClick={toggle} /> : <FaBars onClick={toggle} />
            }
          </div>
         {
          menuItem.map((item, index)=>(
            <NavLink to={item.path} key={index} className={styles.link} activeclassName={styles.active} onClick={item.name === 'Sair' ? handleLogout : null}>
              
              <div className={styles.icon}>{item.icon}</div>
              <div style={{display: isOpen ? "block" : "none"}} className={styles.link_text}>{item.name}</div>
            </NavLink>
          ))
         }
      </div>
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default SideMenu;