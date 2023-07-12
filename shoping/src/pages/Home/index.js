import React from 'react'
import './index.css'
import Navbar from '../../componets/Navbar'
import Category from '../../componets/Category'
import TopProduct from '../../componets/TopProduct'
import Product from '../product'
const Home=()=> {
  return (
    <div className='home'>
      <div className="nav">
        <Navbar/>
      </div>
        {/* <Category/> 
        <TopProduct/>  */}
        <Product/>
    </div>
  )
}

export default Home