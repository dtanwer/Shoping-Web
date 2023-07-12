import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import './index.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Auth from '../../pages/Auth';
import { setLogOut } from '../../features/userSlice';
import { useDispatch,useSelector } from 'react-redux';
const Navbar = () => {

    const dispatch =useDispatch();

    const isLogin=useSelector((state)=>state.auth.login);
    const user=useSelector((state)=>state.auth.user);
    console.log(isLogin)

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handelLogin = () => {

    }
    const handelSearch = () => {

    }
    return (
        <>
            <div className='navBar'>
                <div className="leftNav">
                    <div className="item">
                        <h1>Flipkart</h1>
                    </div>
                    <div className="itemsearch">
                        <form onSubmit={handelSearch}>
                            <input type="text" placeholder=' Search for products, brands and more' required />
                            <SearchOutlinedIcon className='icon' />
                        </form>
                    </div>
                </div>
                <div className="rightNav">
                    {
                        !isLogin?<div className="item"> <button onClick={showModal}>Login</button>  </div> :
                        <div className="item"> <button onClick={()=>dispatch(setLogOut())}>Logout</button>  </div>
                    }
                    
                    <div className="item">DashBoard</div>
                    <div className="item"> <ShoppingCartIcon /> Cart</div>
                </div>
            </div>
            <Modal  width={1000} open={isModalOpen}  onCancel={handleCancel} footer={[]}>
               <Auth handleCancel={handleCancel}/> 
            </Modal>
        </>
    )
}

export default Navbar