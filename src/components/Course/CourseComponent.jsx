import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'react-pdf';
import styles from './CourseComponent.module.css'
import arrow from '../../assets/arrow.svg'

import pdfTest from '../../assets/Victor_Florentino_Curriculo.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = pdfTest;

const coursesData = [
  {
    id: 76,
    title: 'Curso de React',
    description: 'Aprenda React do básico ao avançado.',
    lessons: [
      {
        id: 1,
        title: 'Introdução ao React',
        type: 'video',
        url: 'https://www.youtube.com/embed/hd2B7XQAFls', 
      },
      {
        id: 2,
        title: 'Componentes em React',
        type: 'video',
        url: 'https://www.youtube.com/embed/aJR7f45dBNs', 
      },
      {
        id: 3,
        title: 'State e Props',
        type: 'pdf',
        url: pdfTest,
      },
    ],
  },
 
];

function CourseComponent() {
  const { idUser } = useParams();
  const id = parseInt(idUser);
  console.log(id);
  const [visibleLessons, setVisibleLessons] = useState([]);
  const [currentLesson, setCurrentLesson] = useState(0);

  const course = coursesData.find((course) => course.id === id);

  if (!course) {
    return <div>Curso não encontrado</div>;
  }

  const handleLessonChange = (index) => {
    setCurrentLesson(index);
    toggleLessonVisibility(index);
  };

  const toggleLessonVisibility = (index) => {
    setVisibleLessons((prevVisibleLessons) => {
      const updatedVisibleLessons = [...prevVisibleLessons];
      updatedVisibleLessons[index] = !updatedVisibleLessons[index];
      return updatedVisibleLessons;
    });
  };

  const renderContent = () => {
    const currentType = course.lessons[currentLesson].type;

    if (currentType === 'video') {
      return (
        <div>
          <h3>Vídeo da Aula: {course.lessons[currentLesson].title}</h3>
          <iframe
            width="560"
            height="315"
            src={course.lessons[currentLesson].url}
            title="Reprodutor de Vídeo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
    } else if (currentType === 'pdf') {
      return (
        <div>
          <h3>Conteúdo da Aula: {course.lessons[currentLesson].title}</h3>
          <a
            href={pdfTest}  
            download={`Aula_${currentLesson + 1}_${course.lessons[currentLesson].title}.pdf`}
          >
            Baixar PDF
          </a>
        </div>
      );
    }

    return null;
  };

  return (
    <div className={styles.course_div_main}>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <h2>Aulas</h2>
      <ul>
        {course.lessons.map((lesson, index) => (
          <li key={lesson.id} onClick={() => handleLessonChange(index)}>
            <section className={styles.section_course}>
              <div className={styles.course_title}>
                {lesson.title}
                <img src={arrow} alt="arrow-course" className={styles.course_arrow} /> 
              </div>
              <div className={styles.course_class}>{visibleLessons[index] && renderContent()}</div>          
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseComponent;
