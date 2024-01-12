import styles from './TrailsStarted.module.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const TrailsStarted = ({to, padding, background, color}) => {   
    return (
        <>    
        <main className={styles.main_trails}>
            <div className={styles.title}>
                <p>Trilhas Iniciadas</p>
            <div className={styles.progress}>
                <p>Progresso</p>
                <span className={styles.progress_bar}>15%</span>
            </div>
            </div>
            <div className={styles.bar}>
                <span className={styles.span_trails}>Trilha 2</span>
            <Link to={to}><Button text='Continuar'  background={background} color={color} padding={padding} className={styles.button_trails} /></Link>
            </div>

            <div className={styles.title}>
                <p>Trilhas Não Iniciadas</p>
            </div>
            <div className={styles.bar}>
                <span className={styles.span_trails}>Trilha 3</span>
                <Link to={to}><Button text='Iniciar'  background={background} color={color} padding={padding} className={styles.button_trails} /></Link>
            </div>
            <div className={styles.bar}>
                <span className={styles.span_trails}>Trilha 4</span>
                <Link to={to}><Button text='Iniciar'  background={background} color={color} padding={padding} className={styles.button_trails} /></Link>
            </div>
            <div className={styles.bar}>
                <span className={styles.span_trails}>Trilha 5</span>
                <Link to={to}><Button text='Iniciar'  background={background} color={color} padding={padding} className={styles.button_trails} /></Link>
            </div>
            
            <div className={styles.title}>
                <p>Trilhas Finalizadas</p>
            </div>
            <div className={styles.bar}>
                <span className={styles.span_trails}>Trilha 1</span>
                <Link to={to}><Button text='Revisar'  background={background} color={color} padding={padding} className={styles.button_trails} /></Link>
            </div>

        </main>
        </>
    )
}

export default TrailsStarted
