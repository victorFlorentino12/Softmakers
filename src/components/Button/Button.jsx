
import './Button.module.css'

const Button = ({background, padding, text, color, to}) => {
  return (
   <button type='submit' style={{backgroundColor: background, padding: padding, color: color}}>{text}</button>
  )
}

export default Button