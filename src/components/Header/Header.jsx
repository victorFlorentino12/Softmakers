import React, { useState, useEffect } from 'react';
import styles from './Header.module.css'
import { FaBell, FaUserCircle} from "react-icons/fa"
import Logo from "./Logo"; 
import UserMenu from './UserMenu';



const Header = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://reqres.in/api/users/2');
        const data = await response.json();

        if (data.data && data.data.first_name) {
          setFirstName(data.data.first_name);
        }
        //Aqui tem que alterar pro cargo, coloquei só pra testar
        if (data.data && data.data.last_name) {
          setLastName(data.data.last_name);
        }

      } catch (error) {
        console.error('Erro ao buscar dados da API', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <header>
      <div className={styles.header_logo}>
        <Logo/>
      </div>
      <div className={styles.header_login}>
          <UserMenu />
          <div className={styles.header_user_dates}>
            <p>{`${firstName} ${lastName}`}</p>
            <p>Cargo</p>
          </div>
        </div>
    </header>
  )
}

export default Header