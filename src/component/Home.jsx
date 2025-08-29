import React from 'react'
import BlogSection from './BlogSection'

import Banner from './banner/Banner'


import Category from './category/Category'


import ProductPage from './ProductPage/ProductPage'
import Search from './Searchbar/Search'


import Products from './Products'
<<<<<<< HEAD
// import BuySellForm from './CategoryData/BuySellForm'
import TrendingPrices from './CategoryData/TrendingPrices'
// import EggRateTable from './CategoryData/EggRateTable'
=======

import BuySellForm from './CategoryData/BuySellForm'



// import TrendingPrices from './CategoryData/TrendingPrices'
// import EggRateTable from './CategoryData/EggRateTable'


import TrendingPrices from './CategoryData/TrendingPrices'
import EggRateTable from './CategoryData/EggRateTable'
import MarketTable from './CategoryData/MarketTable'

>>>>>>> ce2b5017b5d7f40df20bc1c4b97a074f150336bb

const Home = () => {
  return (
    <div>

    
      <Category/>
      <Search/>
      
      
 <Products/>
      <Banner/>
     
      <BlogSection/>
<<<<<<< HEAD
      {/* <BuySellForm/> */}
       <TrendingPrices/>
       {/* <EggRateTable/> */}
=======

      <BuySellForm/>
       <TrendingPrices/>
       <EggRateTable/>

      {/* <BuySellForm/> */}

       {/* <TrendingPrices/> */}
       {/* <EggRateTable/> */}

       {/* <TrendingPrices/> */}
       {/* <EggRateTable/> */}

       <MarketTable/>

>>>>>>> ce2b5017b5d7f40df20bc1c4b97a074f150336bb
      
      
      

    </div>
  )
}

export default Home
