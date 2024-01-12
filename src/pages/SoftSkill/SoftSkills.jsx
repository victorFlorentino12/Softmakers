import styles from './SoftSkills.module.css'
import SideMenu from '../../components/SideMenu/SideMenu'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'
import TrailsStarted from '../../components/TrailsStarted/TrailsStarted'


const SoftSkills = () => {
  return (
    <div>
    <section className={styles.section_soft_skills}>
      <Header/> 
      <SideMenu/>
      <div className={styles.container_soft_skills}>

        <div className={styles.transparent} ></div>

        <div className={styles.main_soft}> 
        <TrailsStarted padding={'3px 7px'} to={'/course/1'}/>
          
        </div>
       
      </div>
     
    </section>
  </div>
  )
}

export default SoftSkills