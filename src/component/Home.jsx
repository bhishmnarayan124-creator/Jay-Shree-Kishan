import React from 'react'
import BlogSection from './BlogSection'

import Banner from './banner/Banner'


import Category from './category/Category'

<<<<<<< HEAD
import ProductPage from './ProductPage/ProductPage'
import Search from './Searchbar/Search'
=======
>>>>>>> e549ad5a9f4779e66168b5b97ef172a6281903e8

import Products from './Products'
// import BuySellForm from './CategoryData/BuySellForm'
// import TrendingPrices from './CategoryData/TrendingPrices'
import EggRateTable from './CategoryData/EggRateTable'

const Home = () => {
  return (
    <div>

    
      <Category/>
      <Search/>
      
      
 <Products/>
      <Banner/>
     
      <BlogSection/>
      {/* <BuySellForm/> */}
       {/* <TrendingPrices/> */}
       <EggRateTable/>
      
      
      

    </div>
  )
}

export default Home
