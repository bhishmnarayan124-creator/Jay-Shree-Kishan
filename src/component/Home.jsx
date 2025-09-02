import React from 'react'
import BlogSection from './BlogSection'

import Banner from './banner/Banner'

import Search from './Searchbar/Search'

import Products from './Products'

// import BuySellForm from './CategoryData/BuySellForm'
import TrendingPrices from './CategoryData/TrendingPrices'
// import EggRateTable from './CategoryData/EggRateTable'

import BuySellForm from './CategoryData/BuySellForm'

import Collcard from './CategoryData/Collcard'
import Features from './category/Category'


const Home = () => {
  return (
    <div>

    
      <Features/>
      <Search/>
      
      
      <Banner/>
      <BlogSection/>
      {/* <BuySellForm/> */}
       <TrendingPrices/>
       {/* <EggRateTable/> */}
      <BuySellForm/>
       <TrendingPrices/>
       {/* <EggRateTable/> */}
      <Collcard/>
      {/* <BuySellForm/> */}
       <TrendingPrices/>
       {/* <EggRateTable/> */}
       {/* <TrendingPrices/> */}
       {/* <EggRateTable/> */}
       {/* <TrendingPrices/> */}
       {/* <EggRateTable/> */}
    </div>
  )
}

export default Home
