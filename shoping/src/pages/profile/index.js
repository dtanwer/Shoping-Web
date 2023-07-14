import { useState, useEffect } from 'react'
import './index.css'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, message, Select, Checkbox } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from '../../services/client.service';
import { setUser } from '../../features/userSlice';
const Profile = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const user = useSelector((state) => state.auth.user)
    const dispatch=useDispatch();
    const info = () => {
        messageApi.info('Profile Updated!');
    };
    const [form] = Form.useForm();
    const onFinish = async (values) => {
        try {
            const res = await updateUser({ ...values,address:[...user.address,{userAddress:values.Uaddress}]}, user._id)
            console.log(res.data);
            dispatch(setUser(res.data));
            info()
        } catch (error) {
            console.log(error)
        }
        // console.log(values);

    };
    // const onReset = () => {
    //     form.resetFields();
    // };
    const onFill = () => {
        form.setFieldsValue({ ...user});
    };


    useEffect(() => {
        console.log(user)
        onFill()
    }, [])
    return (
        <div className='profile'>
            <div className="item1">
                <div className="hellow">
                    <div className="img">
                        <img src={user.img} alt="user" />
                    </div>
                    <div className="hii">
                        <span>Hello,</span> <br />
                        <span><b>{user.name}</b></span>
                    </div>
                </div>
                <div className='item left'>
                    <div className="img">
                        <img src={user.img} alt="" />
                    </div>
                    <div className="info">
                        <li><span>{user.name}</span></li>
                        <li><span>{user.email}</span></li>
                        <li><span>{user.phone}</span></li>
                    </div>
                    <div className="address">
                        <h3>Address</h3>
                        {
                            user.address.map((item) => {
                                return (
                                    <li><span>{item.userAddress}</span></li>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="item persenalDetails">
                {contextHolder}
                <div className='heading'>
                    <h2>Personal Information</h2>
                </div>
                <div className="form">
                    <Form
                        form={form}
                        name="control-hooks"
                        onFinish={onFinish}
                        style={{
                            maxWidth: 600,
                        }}
                    >
                        <Form.Item name="name" label="Name" rules={[{ required: true, },]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="email" label="Email" rules={[{ required: true, },]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="phone" label="Phone" rules={[{ required: true, },]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="Uaddress" label="Address" >
                            <Input />
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" htmlType="submit">
                                Update
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Profile