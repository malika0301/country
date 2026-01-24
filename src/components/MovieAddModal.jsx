import React, { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import axios from 'axios';
import { toast } from 'react-toastify';


const MovieAddModal = (getData) => {
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
            title_uz: values.title_uz,
            title_ru: values.title_ru,
            title_en: values.title_en,
            description_uz: values.description_uz,
            description_ru: values.description_ru,
            description_en: values.description_en,
            poster_url: values.poster_url,
            banner_url: values.banner_url,
            trailer_url: values.trailer_url,
            video_url: values.video_url,
            duration_minutes: +values.duration_minutes,
            release_year: +values.release_year,
            imdb_rating: +values.imdb_rating,
            age_rating: values.age_rating,
            country: values.country,
            language: values.language,
        };

        try {
            await axios.post(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie`, payload);
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
                    Add Movie +
                </Button>
            </div>
            <Modal
                title="Add Movie"
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
                            name="title_uz"
                            layout='vertical'
                            rules={[{ required: true, message: 'Please input Name in Uz!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Name Ru"
                            name="title_ru"
                            layout='vertical'
                            rules={[{ required: true, message: 'Please input Name in Ru!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Name En"
                            name="title_en"
                            layout='vertical'
                            rules={[{ required: true, message: 'Please input Name in En!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="About Uz"
                            name="description_uz"
                            layout='vertical'
                            rules={[{ required: true, message: 'Please input About in Uz!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="About Ru"
                            name="description_ru"
                            layout='vertical'
                            rules={[{ required: true, message: 'Please input About in Ru!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="About En"
                            name="description_en"
                            layout='vertical'
                            rules={[{ required: true, message: 'Please input About in En!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Poster url"
                            name="poster_url"
                            layout='vertical'
                            rules={[{ required: true, message: 'Please input url!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Banner url"
                            name="banner_url"
                            layout='vertical'
                            rules={[{ required: true, message: 'Please input url!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Trailer url"
                            name="trailer_url"
                            layout='vertical'
                            rules={[{ required: true, message: 'Please input url!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Video url"
                            name="video_url"
                            layout='vertical'
                            rules={[{ required: true, message: 'Please input url!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="D minutes"
                            name="duritation_minutes"
                            layout='vertical'
                            rules={[{ required: true, message: 'Please input duritation minutes!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Release year"
                            name="release_year"
                            layout='vertical'
                            rules={[{ required: true, message: 'Please input Release year!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Raiting"
                            name="imdb_raiting"
                            layout='vertical'
                            rules={[{ required: true, message: 'Please input Raiting!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Age raiting"
                            name="age_raiting"
                            layout='vertical'
                            rules={[{ required: true, message: 'Please input Age raiting!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Country"
                            name="country"
                            layout='vertical'
                            rules={[{ required: true, message: 'Please input Country!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Language"
                            name="language"
                            layout='vertical'
                            rules={[{ required: true, message: 'Please input Language!' }]}
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
export default MovieAddModal;