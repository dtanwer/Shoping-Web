import React from 'react'
import './index.css'
import Rate from '../../assets/Rating'

function ProductCard1({data}) {
    console.log(data)
  return (
    <div className='productCard1'>
        <div className="img">
            <img src={data.thumbnail} alt="thumbnail" />
        </div>
        <div className="content">
            <span className='name'>{data.description} g gfd fd gfdgfgd </span>
            <span>{data.brand}</span>
            <div className="productRating">
            <Rate data={data.rating}/>
            </div>
            <span className='price'>₹ {data.price} <span className='MRP'>30000</span></span> <span className='discount'>{data.discountPercentage}%</span>
        </div>
    </div>
  )
}

export default ProductCard1
