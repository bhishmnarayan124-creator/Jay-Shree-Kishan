import React from 'react'
import './Search.css'
import { FiSearch } from "react-icons/fi";
const Search = () => {
  return (
    <>
    <div className='srch'>
      <input type="text" placeholder='search' />
      <FiSearch  className='icn'/>
      
    </div>

    </>    
  )
}

export default Search