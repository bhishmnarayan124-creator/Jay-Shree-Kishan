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
  
import BrandPage from './component/brand/BrandPage'

import SiteMap from './component/sitemap/SiteMap'

import Special from './component/special/Special'
import TrendingPrices from './component/CategoryData/TrendingPrices'
<<<<<<< HEAD
import EggRateTable from './component/CategoryData/EggRateTable'
=======
import BuySellForm from './component/CategoryData/BuySellForm'
<<<<<<< HEAD
import MarketTable from './component/CategoryData/MarketTable'
import CategoryPage from './component/CategoryData/Categories'
import EggRateTable from './component/CategoryData/EggRateTable'
=======
>>>>>>> ce2b5017b5d7f40df20bc1c4b97a074f150336bb
>>>>>>> 80d601ffb3d3142ada3c2a9a6c5ac310676b0df3

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

      <Route path='/brandPage' element={<BrandPage/>}/>

        <Route path='/special' element={<Special/>}/>
      <Route path='/accountPage' element={<AccountPage/>}/>
       <Route path='/siteMap' element={<SiteMap/>}/> 
       <Route path='/brandPage' element={<BrandPage/>}/> 

       <Route path='/trendingPrices' element={<TrendingPrices/>}/> 
<<<<<<< HEAD
       <Route path='/mandiprice' element={<EggRateTable/>}/> 

=======
        <Route path='/buySellForm' element={<BuySellForm/>}/> 
<<<<<<< HEAD
         <Route path='/marketTable' element={<MarketTable/>}/> 
         <Route path='/categoryPage' element={<CategoryPage/>}/> 
          <Route path='/eggRateTable' element={<EggRateTable/>}/> 
=======
>>>>>>> ce2b5017b5d7f40df20bc1c4b97a074f150336bb

>>>>>>> 80d601ffb3d3142ada3c2a9a6c5ac310676b0df3

     </Routes>
     
      <Footer/>

    </div>
    </>
  )
}

export default App
