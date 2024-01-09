import styles from './SoftSkills.module.css'
import SideMenu from '../../components/SideMenu/SideMenu'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'

const SoftSkills = () => {
  return (
    <div>
    <section className={styles.section_soft_skills}>
      <Header/> 
      <SideMenu/>
      <div className={styles.container_soft_skills}>

        <div className={styles.transparent} ></div>

        <div className={styles.test}>
      <Link to={'/course/76'}><button>curso</button></Link>
        </div>
      </div>
     
    </section>
  </div>
  )
}

export default SoftSkills