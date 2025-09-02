import React from 'react'
import BlogSection from './BlogSection'
import Banner from './banner/Banner'
import Search from './Searchbar/Search'

import Features from './category/Category'


const Home = () => {
  return (
    <div>
      <Features/>
      <Search/>
      <Banner/>
      <BlogSection/>

    </div>
  )
}

export default Home
