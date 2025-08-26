import React from 'react'
import Products from './component/Products'
import Home from './component/Home'
import { FaRoute } from 'react-icons/fa'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navber/Navber'
import MenuBar from './component/MenuBar/MenuBar'
import Footer from './component/Footer/Footer'
import Contact from './pages/Contact/Contact'
import ProductPage from './component/ProductPage/ProductPage'
import PopupModal from './component/PopupModal/PopupModal'
import AccountPage from './component/AccountPage/AccountPage'
import SiteMap from './component/sitemap/SiteMap'
import BrandPage from './component/brand/BrandPage'

const App = () => {
  return (
    <>
    <div>
      <Navbar/>
      <MenuBar/>
       <PopupModal/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/productpage' element={<ProductPage/>}/>
      <Route path='/accountPage' element={<AccountPage/>}/>
      
       <Route path='/brandPage' element={<BrandPage/>}/>
     </Routes>
     
      <Footer/>

    </div>
    </>
  )
}

export default App
