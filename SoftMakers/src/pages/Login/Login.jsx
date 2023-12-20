import styles from './Login.module.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div><Link to={'home/:id'}><button>va para home</button></Link></div>
  )
}

export default Login