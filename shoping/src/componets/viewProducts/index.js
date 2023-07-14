import React, { useEffect, useState } from 'react';
import './index.js';
import { Space, Table,Modal } from 'antd';
import moment from 'moment';
import { Tabs } from 'antd';
import { getDraftProducts, getProducts } from '../../services/product.service.js';
import { useSelector } from 'react-redux';
import ProductForm from '../productForm/index.js';

const ViewProducts = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date) => <span>{moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</span>,
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
    },
    {
      title: 'Image',
      dataIndex: 'img',
      key: 'img',
      render: (src) => <img src={src} alt="no img" style={{ width: "50px", height: "50px" }} />,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=>handelEdit(record)}>Edit {record.title}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const user = useSelector((state) => state.auth.user);
  const [data, setData] = useState([]);
  const [draftData, setdraftData] = useState([]);
  const [show, setShow] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const getproductsForVender = async () => {
    try {
      const res = await getProducts(user._id);
      console.log(res.data)
      setData(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  const getDraftproductsForVender = async () => {
    try {
      const res = await getDraftProducts(user._id);
      console.log(res.data)
      setdraftData(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getproductsForVender()
    getDraftproductsForVender()
  }, [])

  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: `Products`,
      children: <Table columns={columns} dataSource={data} />,
    },
    {
      key: '2',
      label: `Draft Products`,
      children: <Table columns={columns} dataSource={draftData} />,
    }
  ];

  const handelEdit=(record)=>{
    console.log(record)
    setModalOpen(true)
  }

  




  return (

      <div>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        <Modal
                title="Add Products"
                style={{ top: 0 }}
                width={700}
                open={modalOpen}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
            >
              <ProductForm />
            </Modal>
      </div>
  )
}

export default ViewProducts