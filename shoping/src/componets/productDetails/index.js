import React from 'react'
import './index.css'
import { Radio } from 'antd';
import Rating from '../../assets/Rating'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
const ProductDetails = ({ data }) => {
  const Highlights = [
    '6 GB RAM | 128 GB ROM | Expandable Upto 1 TB',
    '16.94 cm (6.67 inch) Full HD+ AMOLED Display',
    '16.94 cm (6.67 inch) Full HD+ AMOLED Display',
    '16.94 cm (6.67 inch) Full HD+ AMOLED Display'
  ]
  const offers = [
    'Bank Offer 5% Cashback on Flipkart Axis Bank Card',
    'Bank Offer 5% Cashback on Flipkart Axis Bank Card',
    'Bank Offer 5% Cashback on Flipkart Axis Bank Card',
    'Bank Offer 5% Cashback on Flipkart Axis Bank Card'
  ]
  const options=['4 GB','8 GB','12 GB'];
  return (
    <div className='productDetails'>
      <div className="name">
        <h1>{data.title}</h1>
        <h3>{data.description}</h3>
      </div>
      <Rating data={data.rating} />
      <div className="price">
        <h1>₹ {data.price}  <span className='MRP'>20000</span>   <span style={{ color: "green" }}>{data.discountPercentage}%</span></h1>
      </div>
      <div className="options">
        <Radio.Group  optionType="button" size="large">
          {
            options.map((item,i)=>{
              return(
                <Radio value={item}>{item}</Radio>
              )
            })
          }
        </Radio.Group>
      </div>
      <div className="offer">
      <h3>Available offers</h3>
        {
            offers.map((item,i)=>{
              return(
               <div className='bankOffers'>
                 <h5> <LocalOfferIcon className='icon'/> {item}</h5>
               </div>
              )
            })
        }
      </div>
      <div className="Highlights">
        <h3>Highlights</h3>
        <ul>
          {
            Highlights.map((item, i) => {
              return (
                <li>{item}</li>
              )
            })
          }
        </ul>
      </div>
      <div className="seller">
        <h3>Seller</h3>
        <ul>
          <li>Name</li>
          <li>Address</li>
          <li>Phone</li>
        </ul>
      </div>
      <div className="description">
        <h3>Description</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet a minus,
          est laudantium tenetur accusantium quis eius nihil earum vero nisi harum
          exercitationem illo porro culpa magnam. Provident, accusantium dignissimos quibusdam neque cum
          eligendi nobis commodi, doloribus laboriosam voluptas nemo vel hic magni
          consequatur laborum illo iste modi adipisci eum.
        </p>
      </div>
    </div>
  )
}

export default ProductDetails
