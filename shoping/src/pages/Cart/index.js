import React, { useEffect, useState } from 'react'
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import CartCard from '../../componets/cartCard';
import { Modal, Empty } from 'antd';
import AddAddress from '../../componets/AddAddress';
import { removeUserCart, setAddress } from '../../features/userSlice';
import { addAddresToUser, addOrders, getProduct, addToCart, removeToCart } from '../../services/product.service';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const user = useSelector((state) => state.auth.user);
  const [selectedAddress, setSelectedAddress] = useState("")
  const [add, setAdd] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const showModal1 = () => {
    setIsModalOpen1(true);
  };

  const handleOk = async () => {
    try {
      await addAddresToUser(user._id, { userAddress: add });
      dispatch(setAddress({ userAddress: add }))
      setAdd("")
      setIsModalOpen(false);
    } catch (error) {
      console.log(error)
    }


  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handelAddAddress = () => {
    showModal();
  }
  const handelSelectAddress = () => {
    showModal1();
  }

  useEffect(() => {
    if (Object.keys(user.address).length !== 0) {
      setSelectedAddress(user.address[0].userAddress);
    }
  }, [])

  const getUserProduct = async (id) => {
    try {
      const res = await getProduct(id);
      return res.data;
    } catch (error) {
      console.log(error)
    }
  }
  const handelRemoveCart = async (id) => {
    try {
      await removeToCart(user._id, { id })
      dispatch(removeUserCart({ id }))
    } catch (error) {
      console.log(error)
    }
  }

  const placeOrder = () => {
    alert("placing...");
    user?.cart?.map(async (item) => {
      try {
        const data = await getUserProduct(item.id)
        const res = await addOrders(
          {
            vendorId: data.vendorId,
            userId: user._id,
            userName: user.name,
            productName: data.title,
            address: selectedAddress,
            productId: data._id,
            quantity: 5,
          })
          handelRemoveCart(item.id)
          navigate('/success')
          
        console.log(res.data);
      } catch (error) {
        console.log(error)
      }
    })


  }
  return (

    <div className='cart'>
      <div className="cartItems">
        <div className="address">
          <span className='heading'>Address</span>
          <div className="content">
            <div className="selectedAddress">
              <span>{selectedAddress}</span>
            </div>
            {
              Object.keys(user.address).length !== 0 ? (
                <div className='addressButton'>
                  <button onClick={handelSelectAddress}>Select Address</button>
                  <button onClick={handelAddAddress} className='add'>Add</button>
                </div>
              ) :
                (
                  <div className='addressButton'>
                    <button onClick={handelAddAddress}>Add address</button>
                  </div>
                )
            }
          </div>
        </div>
        {Object.keys(user?.cart).length !== 0 ? (<div className="items">
          {
            user?.cart?.map((item) => {
              return (
                <CartCard user={user} id={item.id} key={item.id} />
              )
            })
          }
          <div className="placeOrder">
            <button onClick={placeOrder}>PLACE ORDER</button>
          </div>
        </div>) : (<Empty description="Cart is Empty" />)}
      </div>
      <div className="amountDetails">

      </div>
      <Modal title="Input Your Address" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <input type="text"
          value={add} onChange={(e) => setAdd(e.target.value)}
          style={{ padding: "10px", fontSize: "18px", width: "19rem" }} />
      </Modal>
      <AddAddress isModalOpen1={isModalOpen1} setIsModalOpen1={setIsModalOpen1} setSelectedAddress={setSelectedAddress} />

    </div>
  )
}

export default Cart