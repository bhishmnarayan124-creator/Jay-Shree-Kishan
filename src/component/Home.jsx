import React from 'react'
import BlogSection from './BlogSection'
import Navbar from './Navber/Navber'
import Footer from './Footer/Footer'
import MenuBar from './MenuBar/MenuBar'
import Banner from './banner/Banner'

import Special from './special/Special'
import Category from './category/Category'

import ProductPage from './ProductPage/ProductPage'
import Products from './Products'

const Home = () => {
  return (
    <div>

    
      <Category/>

      
      

      <Banner/>
      <Products/>
      <BlogSection/>

      <Special/>
     

      
      
      

    </div>
  )
}

export default Home
