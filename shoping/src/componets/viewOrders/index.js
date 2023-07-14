import {useEffect,useState} from 'react'
import './index.css'
import { Space, Table } from 'antd';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { getOrders } from '../../services/product.service';
const columns = [
  {
    title: 'User Name',
    dataIndex: 'userName',
    key: 'userName',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Product',
    dataIndex: 'productName',
    key: 'productName',
    render: (text) => <span>{text}</span>,
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
// const data = [
//   {
//     name: 'John Brown',
//     quantity: 32,
//     address: 'New York No. 1 Lake Park',
//     date: '2023-07-12T19:12:06.070+00:00',
//   },
//   {
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     date: '2023-07-12T19:12:06.070+00:00',
//   },
//   {
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
//   {
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   }
// ];
const ViewOrders = () => {

  const user = useSelector((state) => state.auth.user);
  const [data, setData] = useState([]);

  const getOrdersForVender = async () => {
    try {
      const res = await getOrders(user._id);
      console.log(res.data)
      setData(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getOrdersForVender()
  }, [])
  return (
    <div className='viewOrders'>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default ViewOrders