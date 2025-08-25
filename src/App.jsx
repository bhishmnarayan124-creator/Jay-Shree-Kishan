import React from 'react'
import Products from './component/Products'
import Home from './component/Home'
import { FaRoute } from 'react-icons/fa'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navber/Navber'
import MenuBar from './component/MenuBar/MenuBar'
import Footer from './component/Footer/Footer'
import Contact from './pages/Contact/Contact'

const App = () => {
  return (
    <>
    <div>
      <Navbar/>
      <MenuBar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      
     </Routes>
      
      <Footer/>

    </div>
    </>
  )
}

export default App
