import React, { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useQueryClient } from '@tanstack/react-query';
const ActorAddModal = (getData) => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [ setModalText] = useState('Content of the modal');
    const queryClient = useQueryClient();
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };
    const onFinish = async (values) => {
        const payload = {
            full_name: values.full_name,
            photo_url : values.photo_url,
            birth_year: +values.birth_year,
            biography : values.biography,
            country : values.country
        };

        try {
            await axios.post(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/actor`, payload);
            toast.success("Information add!");
            setOpen(false);
            getData();
            queryClient.invalidateQueries({
                queryKey:["actors"]
            })
        } catch (err) {
            console.log(err);
        }


    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <div style={{ display: "flex", justifyContent: "end" }} >
                <Button style={{ marginBottom: "20px" }} type="primary" onClick={showModal}>
                    Add Actor +
                </Button>
            </div>
            <Modal
                title="Add Actor"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={<></>}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 32 }}
                    wrapperCol={{ span: 32 }}
                    style={{ width: "100%", padding: "20px" }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >

                    <div style={{display:"grid", gridTemplateColumns:"repeat(2, 1fr)", gap:"10px"}}>
                        <Form.Item
                            label="Name"
                            name="full_name"
                            layout='vertical'
                            rules={[{ required: true, message: 'Please input Name!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Photo"
                            name="photo_url"
                            layout='vertical'
                            rules={[{ required: true, message: 'Please input photo url!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Born Year"
                            name="birth_year"
                            layout='vertical'
                            rules={[{ required: true, message: 'Please input born year!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Biography"
                            name="biography"
                            layout='vertical'
                            rules={[{ required: true, message: 'Please input biography!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Country"
                            name="country"
                            layout='vertical'
                            rules={[{ required: true, message: 'Please input country!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </div>

                    <Form.Item label={null}>
                        <Button block type="primary" htmlType="submit">
                            Submit
                        </Button>

                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};
export default ActorAddModal;