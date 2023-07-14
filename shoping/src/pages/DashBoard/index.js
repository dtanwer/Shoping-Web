import { useState } from 'react';
import { Modal } from 'antd';
import './index.css'
import ProductForm from '../../componets/productForm';
import ViewOrders from '../../componets/viewOrders';
import ViewProducts from '../../componets/viewProducts';
const DashBoard = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [addProduct, setAddProduct] = useState(false);
    const [view, setView] = useState(false);
    const [order, setOrders] = useState(false);
    const showModel=(mode)=>{
        setModalOpen(true)
        if(mode==='add')
        {
            setView(false);
            setOrders(false)
            setAddProduct(true);
        }
        else if(mode==='view'){
            setAddProduct(false)
            setOrders(false)
            setView(true);
        }
        else{
            setAddProduct(false)
            setView(false);
            setOrders(true)
        }
    }

    return (
        <div className='dashBoard'>
            <h1>DashBoard</h1>
            <div className="cards">
                <div className="addProduct item" onClick={()=>showModel("add")}>
                    <img src="https://cdn4.iconfinder.com/data/icons/online-shopping-32/64/add-product-boxes-unbox-package-warehouse-512.png" alt="add product" />
                    <h2>Add Products</h2>
                </div>
                <div className="ViewProduct item"  onClick={()=>showModel("view")}>
                    <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/product-view-3-1146772.png" alt="add product" />
                    <h2>View Products</h2>

                </div>
                <div className="Orders item"  onClick={()=>showModel("order")}>
                    <img src="https://icon-library.com/images/orders-icon/orders-icon-12.jpg" alt="add product" />
                    <h2>View Orders</h2>

                </div>

            </div>
            <Modal
                title="Add Products"
                style={{ top: 0 }}
                width={1000}
                open={modalOpen}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
            >
                {addProduct&& <ProductForm update={false}/>}
                {order&& <ViewOrders/>}
                {view&& <ViewProducts/>}
                  
            </Modal>
        </div>
    )
}

export default DashBoard
