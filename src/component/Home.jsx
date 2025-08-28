import React from 'react'
import BlogSection from './BlogSection'
import Navbar from './Navber/Navber'
import Footer from './Footer/Footer'
import MenuBar from './MenuBar/MenuBar'
import Banner from './banner/Banner'
import Category from './category/Category'

import ProductPage from './ProductPage/ProductPage'
import Search from './Searchbar/Search'


const Home = () => {
  return (
    <div>

    
      <Category/>
      <Search/>
      
      

      <Banner/>
      <BlogSection/>
      
      
    </div>
  )
}

export default Home
