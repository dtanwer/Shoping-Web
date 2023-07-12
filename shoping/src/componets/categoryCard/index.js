import React from 'react'
import './index.css'
function CategoryCard({data}) {
  return (
    <div className='categoryCard'>
        <img src={data.img} alt="imgCard" />
        <h3>{data.name}</h3>
    </div>
  )
}

export default CategoryCard
