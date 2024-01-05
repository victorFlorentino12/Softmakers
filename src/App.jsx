import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'

import Login from './pages/Login/Login'
import Header from './components/Header/Header'
import SideMenu from './components/SideMenu/SideMenu'
import { AuthProvider } from './context/AuthProvider'
import { ProtectedLayout } from './components/ProtectedLayout'
import Home from './pages/Home/Home'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/home/:idUser' element={<ProtectedLayout><Home/></ProtectedLayout>}></Route>
          <Route path='/' element={<Login/>}/>
          
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
