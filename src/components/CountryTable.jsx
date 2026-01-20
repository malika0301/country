import React from 'react';
import { Flex, Space, Table, Tag } from 'antd';
import { FaTrash } from 'react-icons/fa';
const columns = [
    {
        title: 'Name (Uz)',
        dataIndex: 'title_uz',
        key: 'name',
        render: text => <p>{text}</p>,
    },
    {
        title: 'Name (En)',
        dataIndex: 'title_en',
        key: 'name',
        render: text => <p>{text}</p>,
    },
    {
        title: 'Name (Tr)',
        dataIndex: 'title_tr',
        key: 'name',
        render: text => <p>{text}</p>,
    },
    {
        title: 'Name (Ru)',
        dataIndex: 'title_ru',
        key: 'name',
        render: text => <p>{text}</p>,
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <Space size="middle">
                <FaTrash />
            </Space>
        ),
    },
];

const CountryTable = ({data}) => <Table columns={columns} dataSource={data} />;
export default CountryTable;