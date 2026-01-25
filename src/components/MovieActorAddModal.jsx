import React, { useState } from 'react';
import { Button, Form, Input, Modal, Select } from 'antd';
import axios from 'axios';
import { toast } from 'react-toastify';
const MovieActorAddModal = ({ actor, movie, getMovieActor }) => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [setModalText] = useState('Content of the modal');
    const [form] = Form.useForm();
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
        try {
            await axios.post(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie_actor`,
                values,);
            toast.success("Information add!");
            setOpen(false);
            form.resetFields();
            getMovieActor();
        } catch (err) {
            console.log(err);
        } finally {
            form.resetFields();
        }


    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <div style={{ display: "flex", justifyContent: "end" }} >
                <Button style={{ marginBottom: "20px" }} type="primary" onClick={showModal}>
                    Add Movie + Actor
                </Button>
            </div>
            <Modal
                title="Add MovieActor"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={<></>}
            >
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 32 }}
                    wrapperCol={{ span: 32 }}
                    style={{ width: "100%", padding: "20px" }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >

                    <div style={{ display: "grid", gap: "10px" }}>

                        <div style={{ display: "grid" }}>
                            <Form.Item
                                name="actor_id"
                                layout='vertical'
                                label="Actor name" rules={[{ required: true }]}>
                                <Select
                                    allowClear
                                    placeholder="Select actor name"
                                    options={actor?.map((el) => {
                                        return { label: el.full_name, value: el.id }
                                    })}
                                />
                            </Form.Item>

                            <Form.Item name="movie_id"
                                layout='vertical'
                                label="Movie name" rules={[{ required: true }]}>
                                <Select
                                    allowClear
                                    placeholder="Select movie name"
                                    options={movie?.map((el) => {
                                        return { label: el.title_uz, value: el.id }
                                    })}
                                />
                            </Form.Item>
                        </div>

                        <Form.Item
                            label="Role"
                            name="role"
                            layout='vertical'
                            rules={[{ required: true, message: 'Please input Role!' }]}
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
export default MovieActorAddModal;