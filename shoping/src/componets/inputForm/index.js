import { useEffect, useState } from 'react'
import './index.css'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, message, Select, Checkbox } from 'antd';
import { addProduct, updateMyProduct } from '../../services/product.service';
import { useSelector } from 'react-redux'
const { Option } = Select;
const { TextArea } = Input;
const InputForm = ({ images,data,update }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const user = useSelector((state) => state.auth.user)
    const [isDraft, setDraft] = useState(false);
    const info = () => {
        messageApi.info('Product Saved!');
    };
    const [form] = Form.useForm();
    const onFinish = async (values) => {
        if(images.length<3)
        {
            alert("Input altest 3 images of Products");
            return;
        }
        if(update)
        {
            try {
                const res = await updateMyProduct({ ...values, images, isDraft },data._id)
                info()
                onReset();
                // console.log(res.data);
            } catch (error) {
                console.log(error)
            }
        }
        else
        {

            try {
                const res = await addProduct({ ...values, images, img: images[0], vendorId: user._id, isDraft })
                info()
                onReset();
                console.log(res.data);
            } catch (error) {
                console.log(error)
            }
        }
        console.log(values);

    };
    const onReset = () => {
        form.resetFields();
    };
    const onFill = () => {
        form.setFieldsValue(data);
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 4 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 20 },
        },
    };

    const formItemLayoutWithOutLabel = {
        wrapperCol: {
            xs: { span: 24, offset: 0 },
            sm: { span: 20, offset: 4 },
        },
    };

    useEffect(()=>{
        console.log(data)
        if(update)
        {
            onFill()
        }
    },[])
    return (
        <div className='inputForm'>
            {contextHolder}
            <Form
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                style={{
                    maxWidth: 600,
                }}
            >
                <Form.Item name="title" label="Title" rules={[{ required: true, },]}>
                    <Input />
                </Form.Item>
                <Form.Item name="rating" label="Rating" rules={[{ required: true, },]}>
                    <Input />
                </Form.Item>
                <Form.Item name="mrp" label="MRP" rules={[{ required: true, },]}>
                    <Input />
                </Form.Item>
                <Form.Item name="price" label="Price" rules={[{ required: true, },]}>
                    <Input />
                </Form.Item>
                <Form.Item name="stock" label="Stock" rules={[{ required: true, },]}>
                    <Input />
                </Form.Item>
                <Form.Item name="description" label="TextArea" rules={[{ required: true, },]}>
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item name="gender" label="Category" rules={[{ required: true, },]}>
                    <Select placeholder="Select Category" allowClear>
                        <Option value="mobile">Mobile</Option>
                        <Option value="faction">Faction</Option>
                        <Option value="grocery">Grocery</Option>
                        <Option value="applince">Applince</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                >
                    {({ getFieldValue }) =>
                        getFieldValue('gender') === 'other' ? (
                            <Form.Item
                                name="customizecategory"
                                label="Customize category"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        ) : null
                    }
                </Form.Item>

                <Form.List
                    name="highlights"
                    rules={[
                        {
                            validator: async (_, highlights) => {
                                if (!highlights || highlights.length < 2) {
                                    return Promise.reject(new Error('At least 3 highlights'));
                                }
                            },
                        },
                    ]}
                >
                    {(fields, { add, remove }, { errors }) => (
                        <>
                            {fields.map((field, index) => (
                                <Form.Item
                                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                    label={index === 0 ? 'highlights' : ''}
                                    required={false}
                                    key={field.key}
                                >
                                    <Form.Item
                                        {...field}
                                        validateTrigger={['onChange', 'onBlur']}
                                        rules={[
                                            {
                                                required: true,
                                                whitespace: true,
                                                message: "Please input highlights or delete this field.",
                                            },
                                        ]}
                                        noStyle
                                    >
                                        <Input placeholder="highlights name" style={{ width: '60%' }} />
                                    </Form.Item>
                                    {fields.length > 1 ? (
                                        <MinusCircleOutlined
                                            className="dynamic-delete-button"
                                            onClick={() => remove(field.name)}
                                        />
                                    ) : null}
                                </Form.Item>
                            ))}
                            <Form.Item>
                                {fields.length < 3 ? (<Button
                                    type="dashed"
                                    onClick={() => add()}
                                    style={{ width: '60%' }}
                                    icon={<PlusOutlined />}
                                >
                                    Add field
                                </Button>) : null}
                                <Form.ErrorList errors={errors} />
                            </Form.Item>
                        </>
                    )}
                </Form.List>
                <Form.List
                    name="offers"
                    rules={[
                        {
                            validator: async (_, offers) => {
                                if (!offers || offers.length < 2) {
                                    return Promise.reject(new Error('At least 2 offers'));
                                }
                            },
                        },
                    ]}
                >
                    {(fields, { add, remove }, { errors }) => (
                        <>
                            {fields.map((field, index) => (
                                <Form.Item
                                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                    label={index === 0 ? 'offers' : ''}
                                    required={false}
                                    key={field.key}
                                >
                                    <Form.Item
                                        {...field}
                                        validateTrigger={['onChange', 'onBlur']}
                                        rules={[
                                            {
                                                required: true,
                                                whitespace: true,
                                                message: "Please input offers or delete this field.",
                                            },
                                        ]}
                                        noStyle
                                    >
                                        <Input placeholder="offers name" style={{ width: '60%' }} />
                                    </Form.Item>
                                    {fields.length > 1 ? (
                                        <MinusCircleOutlined
                                            className="dynamic-delete-button"
                                            onClick={() => remove(field.name)}
                                        />
                                    ) : null}
                                </Form.Item>
                            ))}
                            <Form.Item>
                                {fields.length < 3 ? (<Button
                                    type="dashed"
                                    onClick={() => add()}
                                    style={{ width: '60%' }}
                                    icon={<PlusOutlined />}
                                >
                                    Add field
                                </Button>) : null}
                                <Form.ErrorList errors={errors} />
                            </Form.Item>
                        </>
                    )}
                </Form.List>
                <Form.List
                    name="options"
                    rules={[
                        {
                            validator: async (_, options) => {
                                if (!options || options.length < 2) {
                                    return Promise.reject(new Error('At least 3 options'));
                                }
                            },
                        },
                    ]}
                >
                    {(fields, { add, remove }, { errors }) => (
                        <>
                            {fields.map((field, index) => (
                                <Form.Item
                                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                    label={index === 0 ? 'options' : ''}
                                    required={false}
                                    key={field.key}
                                >
                                    <Form.Item
                                        {...field}
                                        validateTrigger={['onChange', 'onBlur']}
                                        rules={[
                                            {
                                                required: true,
                                                whitespace: true,
                                                message: "Please input options or delete this field.",
                                            },
                                        ]}
                                        noStyle
                                    >
                                        <Input placeholder="options name" style={{ width: '60%' }} />
                                    </Form.Item>
                                    {fields.length > 1 ? (
                                        <MinusCircleOutlined
                                            className="dynamic-delete-button"
                                            onClick={() => remove(field.name)}
                                        />
                                    ) : null}
                                </Form.Item>
                            ))}
                            <Form.Item>
                                {fields.length < 3 ? (<Button
                                    type="dashed"
                                    onClick={() => add()}
                                    style={{ width: '60%' }}
                                    icon={<PlusOutlined />}
                                >
                                    Add field
                                </Button>) : null}
                                <Form.ErrorList errors={errors} />
                            </Form.Item>
                        </>
                    )}
                </Form.List>

                <Checkbox
                    checked={isDraft}
                    onChange={(e) => setDraft(e.target.checked)}
                >
                    Draft
                </Checkbox>


                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                        Reset
                    </Button>
                    <Button type="link" htmlType="button" onClick={onFill}>
                        Fill form
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default InputForm
