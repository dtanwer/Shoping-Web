import React, { useEffect, useState } from 'react'
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import CartCard from '../../componets/cartCard';
import { Modal ,Empty} from 'antd';
import AddAddress from '../../componets/AddAddress';
import { setAddress } from '../../features/userSlice';
import { addAddresToUser } from '../../services/product.service';
const Cart = () => {
  const dispatch = useDispatch();
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
      dispatch(setAddress({userAddress: add}))
      setAdd("")
      setIsModalOpen(false);
    } catch (error) {
      console.log(error)
    }


  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const data = {
    "title": "Apple",
    "description": "ffff  fdkabolf  dah fakhofad  dhsahfhajk  fdhshkhfdah ff hdf ks jfksfdjsfskj fjf fdhoklhf fdha fjlkahfd fa hfjkhf ahd fkhfs ahkdfak fsajhdfa gfh fhf ahdf hfahf  fhah fkjdh hfkdahfdhfssdhkfshjkhf",
    "rating": "4.5",
    "price": "30000",
    "mrp": "350000",
    "img": "https://i.dummyjson.com/data/products/1/1.jpg",
    "stock": "50",
    "vendorId": "venderId",
    "isDraft": false,
    "images": ["https://i.dummyjson.com/data/products/1/1.jpg", "https://i.dummyjson.com/data/products/1/2.jpg", "https://i.dummyjson.com/data/products/1/3.jpg", "https://i.dummyjson.com/data/products/1/4.jpg", "https://i.dummyjson.com/data/products/1/thumbnail.jpg"],
    "highlights": [
      "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
      "'16.94 cm (6.67 inch) Full HD+ AMOLED Display'",
      "'16.94 cm (6.67 inch) Full HD+ AMOLED Display'",
      "'16.94 cm (6.67 inch) Full HD+ AMOLED Display'"
    ],
    "offers": [
      " 'Bank Offer 5% Cashback on Flipkart Axis Bank Card'",
      " 'Bank Offer 5% Cashback on Flipkart Axis Bank Card'",
      " 'Bank Offer 5% Cashback on Flipkart Axis Bank Card'",
      " 'Bank Offer 5% Cashback on Flipkart Axis Bank Card'"
    ],
    "options": ["'4 GB'", "'8 GB'", "'12 GB'"]
  }
  const handelAddAddress = () => {
    showModal();
    console.log(add)

    console.log()
  }
  const handelSelectAddress = () => {
    showModal1();
  }

  useEffect(() => {
    if (Object.keys(user.address).length !== 0) {
      setSelectedAddress(user.address[0].userAddress);
    }
  }, [])






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
       {Object.keys(user?.cart).length!==0? (<div className="items">
          {
            user?.cart?.map((item) => {
              return (
                <CartCard user={user} id={item.id} key={item.id} />
              )
            })
          }
          <div className="placeOrder">
            <button>PLACE ORDER</button>
          </div>
        </div>):( <Empty description="Cart is Empty" />)}
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