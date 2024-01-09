import React from 'react'
import Header from '../../components/Header/Header'
import SideMenu from '../../components/SideMenu/SideMenu'
import styles from './Course.module.css'
import CourseComponent from '../../components/Course/CourseComponent'

const Course = () => {
  return (
    <section className={styles.section_course}>
      <Header/> 
      <SideMenu/>
      <div className={styles.container_course}>

        <div className={styles.transparent} ></div>

        <div className={styles.main}>
        <CourseComponent/>
        </div>
      </div>
     
    </section>
  )
}

export default Course