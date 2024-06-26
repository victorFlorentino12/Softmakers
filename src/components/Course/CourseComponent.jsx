import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { pdfjs } from 'react-pdf';
import styles from './CourseComponent.module.css'
import arrow from '../../assets/arrow.svg'
import completed from '../../assets/completed.svg'
import clock from '../../assets/clock.svg'



import pdfTest from '../../assets/universidade 2.pdf';
import Button from '../Button/Button';

pdfjs.GlobalWorkerOptions.workerSrc = pdfTest;

 export const coursesData = [
  {
    id: 2,
    title: 'Curso de React',
    description: 'Aprenda React do básico ao avançado.',
    completed:false,
    lessons: [
      {
        id: 1,
        title: 'Introdução ao React',
        type: 'video',
        url: 'https://www.youtube.com/embed/hd2B7XQAFls', 
        completed:true
      },
      {
        id: 2,
        title: 'Componentes em React',
        type: 'video',
        url: 'https://www.youtube.com/embed/aJR7f45dBNs', 
        completed:true
      },
      {
        id: 3,
        title: 'State e Props',
        type: 'pdf',
        url: pdfTest,
        completed:false
      },
    ],
  },

  {
    id: 1,
    title: 'Curso de Comunicação',
    description: 'Aprenda se comunicar melhor.',
    completed:false,
    lessons: [
      {
        id: 1,
        title: 'Introdução ao Curso de Oratória',
        type: 'video',
        url: 'https://www.youtube.com/embed?v=dzRjOnJ0Ndw', 
        completed:true
      },
      {
        id: 2,
        title: 'As estratégias para uma Oratória de Alta Performance ',
        type: 'video',
        url: 'https://www.youtube.com/embed?v=OSMFX8Tqy_o', 
        completed:true
      },
      {
        id: 3,
        title: 'Como se Comunicar melhor',
        type: 'pdf',
        url: pdfTest,
        completed:false
      },
      {
        id: 4,
        title: 'Curso de Comunicação nâo violenta',
        type: 'video',
        url: 'https://www.youtube.com/embed?v=uofE9CnWDYU', 
        completed:false
      },
      {
        id: 5,
        title: 'Curso Recomendado',
        type: 'link',
        url: 'https://www.alura.com.br/', 
        completed:false
      },
    ],
  },
];

function CourseComponent() {
  const { idUser } = useParams();
  const id = parseInt(idUser);
  console.log(id);
  const [visibleLesson, setVisibleLesson] = useState(null);

  const course = coursesData.find((course) => course.id === id);

  if (!course) {
    return <div>Curso não encontrado</div>;
  }

  const handleLessonChange = (index) => {
    setVisibleLesson(index);
  };

  const renderContent = (index) => {
    const currentType = course.lessons[index].type;

    if (currentType === 'video') {
      return (
        <div>
          <h3>Vídeo da Aula: {course.lessons[index].title}</h3>
          <iframe
            className={styles.video}
            width="100%"
            height="315"
            src={course.lessons[index].url}
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
          <h3>Conteúdo da Aula: {course.lessons[index].title}</h3>
          <a
            href={pdfTest}  
            download={`Aula_${index + 1}_${course.lessons[index].title}.pdf`}
          >
            Baixar PDF
          </a>
        </div>
      );
    }
    else if (currentType === 'link') {
      return (
        <div>
          <h3>Conteúdo da Aula: {course.lessons[index].title}</h3>
          <a
            href={course.lessons[index].url}  
            target='blank'
          >
            <Button text={'Vá para o Link'} padding={'4px 7px'} background={'#3C5E9B'} color={'#fff'}/>
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
              <div className={styles.course_title} >
                {lesson.title}
                <img src={arrow} alt="arrow-course" className={styles.course_arrow} />
                {(lesson.completed === true) ? <img src={completed} className={styles.status}/> : <img src={clock} className={styles.status} />} 
              </div>
              <div className={styles.course_class}>{visibleLesson === index && renderContent(index)}</div>          
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseComponent;
