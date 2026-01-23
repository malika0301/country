import React from 'react';
import { Button, Flex, Image, Space, Table, Tag } from 'antd';
import { FaTrash } from 'react-icons/fa';
const columns = [
    {
        title: 'Uz',
        dataIndex: 'title_uz',
        key: 'image',
        render: (text) => <p>{text}</p>,
    },
    {
        title: 'Ru',
        dataIndex: 'title_ru',
        key: 'name',
        render: text => <p>{text}</p>,
    },
    {
        title: 'En',
        dataIndex: 'title_en',
        key: 'year',
        render: text => <p>{text}</p>,
    },
    {
        title: 'Trailer',
        dataIndex: 'trailer_url',
        key: 'location',
        render: text => <p>{text}</p>,
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <Space size="middle">
                <Button>Edit</Button>
                <Button danger>Delete</Button>
            </Space>
        ),
    },
];

const MovieTable = ({ data }) => <Table columns={columns} dataSource={data} />;
export default MovieTable;