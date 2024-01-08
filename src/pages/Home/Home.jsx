
import SideMenu from '../../components/SideMenu/SideMenu';
import Header from '../../components/Header/Header';
import styles from './Home.module.css'

const Home = () => {


  return (
    <section className={styles.section_home}>
      <Header/> 
      <SideMenu/>
      <div className={styles.container_home}>

        <div className={styles.transparent} ></div>

        <div className={styles.test}>

        </div>
      </div>
     
    </section>
  );
};

export default Home;
