import React from 'react'
import BlogSection from './BlogSection'

import Banner from './banner/Banner'


import Category from './category/Category'


import Products from './Products'
import BuySellForm from './CategoryData/BuySellForm'
import TrendingPrices from './CategoryData/TrendingPrices'
import EggRateTable from './CategoryData/EggRateTable'
import MarketTable from './CategoryData/MarketTable'

const Home = () => {
  return (
    <div>

    
      <Category/>

      
      
 <Products/>
      <Banner/>
     
      <BlogSection/>
      <BuySellForm/>
       <TrendingPrices/>
       <EggRateTable/>
       <MarketTable/>
      
      
      

    </div>
  )
}

export default Home
