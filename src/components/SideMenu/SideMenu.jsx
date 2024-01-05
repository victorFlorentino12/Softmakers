import { FaBars, FaHouse, FaUser, FaBook, FaXmark, FaHandHoldingHeart, FaHandshake, FaScrewdriverWrench, FaEnvelope, FaRightFromBracket } from "react-icons/fa6";
import Logo from "./Logo"; 

import { NavLink } from "react-router-dom";

import styles from "./SideMenu.module.css"
import { useState } from "react";

const SideMenu = ({children}) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path:"/",
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
      path:"/softskills",
      name: "SoftSkills",
      icon: <FaHandshake />
    },
    {
      path:"/hardskills",
      name: "HardSkills",
      icon: <FaScrewdriverWrench />
    },
    {
      path:"/library",
      name: "Biblioteca",
      icon: <FaBook />
    },
    {
      path:"/logout",
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
            <NavLink to={item.path} key={index} className={styles.link} activeclassName={styles.active}>
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