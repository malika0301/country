import React, {  } from 'react';
import { Button, Flex, Image, Space, Table, Tag } from 'antd';
import { FaTrash } from 'react-icons/fa';
import MovieCategoryAddModal from './MovieCategoryAddModal';
import axios from 'axios';
import { toast } from 'react-toastify';


const MovieCategoryTable = ({ category, movie, movieCategory, getMovieCategory }) => {

    async function deleteMovieCategory(id) {
        try {
            await axios.delete(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie_category/${id}`)
            toast.success("Movie and category deleted!");
            getMovieCategory();
        } catch (err) {
            console.log(err);

        }
    }

    const columns = [
        {
            title: 'Movie name',
            dataIndex: 'movie_id',
            key: 'name',
            render: (text) => {
                return <p>{movie?.find((el) => el.id === text)?.title_uz} </p>;
            },
        },
        {
            title: 'Category',
            dataIndex: 'category_id',
            key: 'name',
            render: (text) => {
                return <p>{category?.find((el) => el.id === text)?.name_uz}</p>
            },
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button danger onClick={() => deleteMovieCategory(record.id)}>
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];
    return (
        <div>
            <MovieCategoryAddModal movie={movie} category={category} getMovieCategory={getMovieCategory} />
            <Table columns={columns} dataSource={movieCategory} />;
        </div>
    )
}
export default MovieCategoryTable;