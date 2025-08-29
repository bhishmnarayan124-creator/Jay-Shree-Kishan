import React from 'react'
import BlogSection from './BlogSection'

import Banner from './banner/Banner'


import Category from './category/Category'



import Search from './Searchbar/Search'
import Collcard from './CategoryData/Collcard'





import TrendingPrices from './CategoryData/TrendingPrices'














const Home = () => {
  return (
    <div>

    
      <Category/>
      <Search/>
      
      
      {/* <Products/> */}
      <Banner/>
     
      <BlogSection/>
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
