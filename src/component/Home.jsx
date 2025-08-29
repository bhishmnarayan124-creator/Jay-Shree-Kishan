import React from 'react'
import BlogSection from './BlogSection'

import Banner from './banner/Banner'


import Category from './category/Category'


import ProductPage from './ProductPage/ProductPage'
import Search from './Searchbar/Search'


import Products from './Products'


import TrendingPrices from './CategoryData/TrendingPrices'



import BuySellForm from './CategoryData/BuySellForm'





import TrendingPrices from './CategoryData/TrendingPrices'
import EggRateTable from './CategoryData/EggRateTable'
import MarketTable from './CategoryData/MarketTable'



const Home = () => {
  return (
    <div>

    
      <Category/>
      <Search/>
      
      
 <Products/>
      <Banner/>
     
      <BlogSection/>

      <BuySellForm/>
       <TrendingPrices/>
       <EggRateTable/>

      {/* <BuySellForm/> */}

       <TrendingPrices/>
       {/* <EggRateTable/> */}


       {/* <TrendingPrices/> */}
       {/* <EggRateTable/> */}

       {/* <TrendingPrices/> */}
       {/* <EggRateTable/> */}

       <MarketTable/>


     
      
      

    </div>
  )
}

export default Home
