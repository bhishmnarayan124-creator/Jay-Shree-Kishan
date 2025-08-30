import React from 'react'
import BlogSection from './BlogSection'

import Banner from './banner/Banner'





import Search from './Searchbar/Search'
import Collcard from './CategoryData/Collcard'
import Features from './category/Category'






import TrendingPrices from './CategoryData/TrendingPrices'














const Home = () => {
  return (
    <div>

      <Features/>
      <Search/>
      
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
