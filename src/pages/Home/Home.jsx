import SideMenu from '../../components/SideMenu/SideMenu';
import Header from '../../components/Header/Header';
import styles from './Home.module.css'
import trilha_img from '../../assets/trilha.svg'
import { coursesData } from '../../components/Course/CourseComponent';
import completed_img from '../../assets/completed.svg'
import clock_img from '../../assets/clock.svg'
import TypeCard from '../../components/Card/TypeCard';

const Home = () => {
  return (
    <section className={styles.section_home}>
      <Header/> 
      <SideMenu/>
      <div className={styles.container_home}>

        <div className={styles.transparent}></div>

        <div className={styles.main}>
          <div className={styles.container_trilha}>
            <h1 className={styles.title_main}>Progresso de trilha</h1>
            <div className={styles.div_trilha}>
              <h4 className={styles.title_1}>Tilha React</h4>
              <h4 className={styles.title_2}>Tilha React</h4>
              <h4 className={styles.title_3}>Tilha React</h4>
              <h4 className={styles.title_4}>Tilha React</h4>
              <img src={trilha_img} className={styles.trilha}/>
              <h4 className={styles.title_5}>Tilha React</h4>
              <h4 className={styles.title_6}>Tilha React</h4>
              <h4 className={styles.title_7}>Tilha React</h4>
              <h4 className={styles.title_8}>Tilha React</h4>
              <img src={completed_img} className={styles.status_trilhas_img}/>
            </div>
            
          </div>
          <div className={styles.card_container}>
            <TypeCard text={'SOFT SKILLS'} to={'/softskills/76'}/>
            <TypeCard text={'HARD SKILLS'} to={'/hardskills/76'}/>
          </div>
       
        </div>

  
      </div>
     
    </section>
  );
};

export default Home;
