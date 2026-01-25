import React, { } from 'react';
import { Button, Flex, Image, Space, Table, Tag } from 'antd';
import { FaTrash } from 'react-icons/fa';
import MovieDirectorAddModal from './MovieDirectorAddModal';
import axios from 'axios';
import { toast } from 'react-toastify';


const MovieDirectorTable = ({ director, movie, movieDirector, getMovieDirector }) => {

    async function deleteMovieDirector(id) {
        try {
            await axios.delete(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie_director/${id}`)
            toast.success("Movie and Director deleted!");
            getMovieDirector();
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
            title: 'Director',
            dataIndex: 'director_id',
            key: 'name',
            render: (text) => {
                return <p>{director?.find((el) => el.id === text)?.full_name}</p>
            },
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button danger onClick={() => deleteMovieDirector(record.id)}>
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];
    return (
        <div>
            <MovieDirectorAddModal movie={movie} director={director} getMovieDirector={getMovieDirector} />
            <Table columns={columns} dataSource={movieDirector} />;
        </div>
    )
}
export default MovieDirectorTable;