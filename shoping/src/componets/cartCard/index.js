import { useState, useEffect } from 'react'
import { getProduct, removeToCart } from '../../services/product.service';
import './index.css'
import { useDispatch } from 'react-redux';
import { removeUserCart } from '../../features/userSlice';
function CartCard({ id ,user}) {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();
    const getUserProduct = async () => {
        try {
            const res = await getProduct(id);
            setProduct(res.data);

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getUserProduct();
    })
    const handelIncrement = () => {
        if (quantity < parseInt(product?.stock))
            setQuantity(quantity + 1)
    }
    const handelDecrement = () => {
        if (quantity > 1) setQuantity(quantity - 1)
        else {
            alert(`Can not add more then ${quantity}`);
        }
    }
    const handelRemoveCart= async()=>{
        try {
           await removeToCart(user._id,{id}) 
           dispatch(removeUserCart({id}))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='cartCard'>
            <div className="img">
                <img src={product?.img} alt="product Img" />
                <div className="quantity">
                    <button onClick={handelDecrement}>-</button>
                    <input type="number" value={quantity} />
                    <button onClick={handelIncrement}>+</button>
                </div>
            </div>
            <div className="details">
                <h2>{product?.title}</h2>
                <div className="price">
                    <h1>₹ {product?.price}  <span className='MRP'>{product?.mrp}</span>   <span style={{ color: "green" }}>{product?.discountPercentage}%</span></h1>
                </div>
                <button className='button-13' onClick={handelRemoveCart}>Remove</button>
            </div>
        </div>
    )
}

export default CartCard