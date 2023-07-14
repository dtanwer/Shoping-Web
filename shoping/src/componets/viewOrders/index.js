import React from 'react'
import './index.css'
import { Space, Table, Tag } from 'antd';
import moment from 'moment';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (date) => <span>{moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</span>,
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    name: 'John Brown',
    quantity: 32,
    address: 'New York No. 1 Lake Park',
    date: '2023-07-12T19:12:06.070+00:00',
  },
  {
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    date: '2023-07-12T19:12:06.070+00:00',
  },
  {
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  }
];
const ViewOrders = () => {
  return (
    <div className='viewOrders'>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default ViewOrders