import { Outlet } from 'react-router-dom'

import './App.css'
import Header from './components/Header/Header'
import SideMenu from './components/SideMenu/SideMenu'

function App() {
  return (
    <div className='container'>
      <div>
        <SideMenu/>
      </div>
      <div>
        <Header/>
        <Outlet/>
      </div>
    </div>
  )
}

export default App
