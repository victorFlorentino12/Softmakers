import SideMenu from '../../components/SideMenu/SideMenu'
import styles from './HardSkills.module.css'
import Header from '../../components/Header/Header'

const HardSkills = () => {
  return (
    <section className={styles.section_hard_skills}>
      <Header/> 
      <SideMenu/>
      <div className={styles.container_hard_skills}>

        <div className={styles.transparent} ></div>

        <div className={styles.test}>

        </div>
      </div>
     
    </section>
  )
}

export default HardSkills