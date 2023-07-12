import React from 'react'
import CarouselProduct from '../../componets/Carousel'
import ProductDetails from '../../componets/productDetails'
import './index.css'

const Product = () => {
    const data = {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": ["https://i.dummyjson.com/data/products/1/1.jpg", "https://i.dummyjson.com/data/products/1/2.jpg", "https://i.dummyjson.com/data/products/1/3.jpg", "https://i.dummyjson.com/data/products/1/4.jpg", "https://i.dummyjson.com/data/products/1/thumbnail.jpg"]
    }
    return (
        <div className='product'>
            <div className="productDetail">
                <div>
                    <CarouselProduct data={data.images} />
                    <div className="buyingBtns">
                        <button className='cartBtn'>Add To Cart</button>                        
                        <button className='buyBtn'>Buy Now</button>                        
                    </div>
                </div>
                <div>
                    <ProductDetails data={data} />
                </div>
            </div>
            <div className="Suggestion">

            </div>

        </div>
    )
}

export default Product
