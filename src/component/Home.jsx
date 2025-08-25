import React from 'react'
import BlogSection from './BlogSection'
import Navbar from './Navber/Navber'
import Footer from './Footer/Footer'
import MenuBar from './MenuBar/MenuBar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <MenuBar/>
      <BlogSection/>
      <Footer/>
    </div>
  )
}

export default Home
