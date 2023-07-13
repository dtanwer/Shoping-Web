import { useState } from 'react';
import { Button, Modal } from 'antd';
import './index.css'
import ProductForm from '../../componets/productForm';
const DashBoard = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className='dashBoard'>
            <h1>DashBoard</h1>
            <div className="cards">
                <div className="addProduct item" onClick={() => setModalOpen(true)}>
                    <img src="https://cdn4.iconfinder.com/data/icons/online-shopping-32/64/add-product-boxes-unbox-package-warehouse-512.png" alt="add product" />
                    <h2>Add Products</h2>
                </div>
                <div className="ViewProduct item">
                    <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/product-view-3-1146772.png" alt="add product" />
                    <h2>View Products</h2>

                </div>
                <div className="Orders item">
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
                <ProductForm/>  
            </Modal>
        </div>
    )
}

export default DashBoard
