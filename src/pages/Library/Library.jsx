import styles from './Library.module.css';
import SideMenu from '../../components/SideMenu/SideMenu'
import Header from '../../components/Header/Header';

const Library = () => {
  return (
    <div>
   <section className={styles.section_library}>
      <Header/> 
      <SideMenu/>
      <div className={styles.container_library}>
      
        <div className={styles.transparent} ></div>

        <div className={styles.test}>

        </div>
      </div>
     
    </section>
  </div>
  )
}

export default Library