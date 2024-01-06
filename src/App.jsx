import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
<<<<<<< HEAD
import Header from './components/Header/Header'
import UserMenu from './components/Header/UserMenu';
import SideMenu from './components/SideMenu/SideMenu'
=======

import Login from './pages/Login/Login'
import { AuthProvider } from './context/AuthProvider'
import { ProtectedLayout } from './components/ProtectedLayout'
import Home from './pages/Home/Home'
import HardSkills from './pages/HardSkills/HardSkills'
import Library from './pages/Library/Library'
import SoftSkills from './pages/SoftSkill/SoftSkills'
>>>>>>> 167dcc1ef3af7a7de5995444d0f8ead3ed055045

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/home/:idUser' element={<ProtectedLayout><Home/></ProtectedLayout>}></Route>
          <Route path='/' element={<Login/>}/>
          <Route path='/hardskills/:idUser' element={<ProtectedLayout><HardSkills/></ProtectedLayout>}></Route>
          <Route path='/library/:idUser' element={<ProtectedLayout><Library/></ProtectedLayout>}></Route>
          <Route path='/softskills/:idUser' element={<ProtectedLayout><SoftSkills/></ProtectedLayout>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
