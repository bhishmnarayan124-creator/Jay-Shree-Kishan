import React from 'react'
import BlogSection from './BlogSection'

import Banner from './banner/Banner'


import Category from './category/Category'



import Search from './Searchbar/Search'



import Products from './Products'

// import BuySellForm from './CategoryData/BuySellForm'
import TrendingPrices from './CategoryData/TrendingPrices'
// import EggRateTable from './CategoryData/EggRateTable'






import BuySellForm from './CategoryData/BuySellForm'

import Collcard from './CategoryData/Collcard'



















const Home = () => {
  return (
    <div>

    
      <Category/>
      <Search/>
      
      
      {/* <Products/> */}
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
