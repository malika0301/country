import React, { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import axios from 'axios';
import { toast } from 'react-toastify';


const GenreAddModal = (getData) => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [setModalText] = useState('Content of the modal');
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
            name_uz: values.name_uz,
            name_ru: values.name_ru,
            name_en: values.name_en,
            slug: values.slug
        };

        try {
            await axios.post(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/genre`, payload);
            setOpen(false);
            toast.success("Information add!");
            getData();
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
                    Add Genre +
                </Button>
            </div>
            <Modal
                title="Add Genre"
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

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
                        <Form.Item
                            label="Name Uz"
                            name="name_uz"
                            layout='vertical'
                            rules={[{ required: true, message: 'Please input Name in Uz!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Name Ru"
                            name="Name_ru"
                            layout='vertical'
                            rules={[{ required: true, message: 'Please input Name in Ru!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Name En"
                            name="name_en"
                            layout='vertical'
                            rules={[{ required: true, message: 'Please input Name in En!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Slug"
                            name="slug"
                            layout='vertical'
                            rules={[{ required: true, message: 'Please input Slug!' }]}
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
export default GenreAddModal;