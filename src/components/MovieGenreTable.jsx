import React, { } from 'react';
import { Button, Flex, Image, Space, Table, Tag } from 'antd';
import { FaTrash } from 'react-icons/fa';
import MovieGenreAddModal from './MovieGenreAddModal';
import axios from 'axios';
import { toast } from 'react-toastify';


const MovieGenreTable = ({ genre, movie, movieGenre, getMovieGenre }) => {

    async function deleteMovieGenre(id) {
        try {
            await axios.delete(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie_genre/${id}`)
            toast.success("Movie and Genre deleted!");
            getMovieGenre();
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
            title: 'Genre',
            dataIndex: 'genre_id',
            key: 'name',
            render: (text) => {
                return <p>{genre?.find((el) => el.id === text)?.name_uz}</p>
            },
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button danger onClick={() => deleteMovieGenre(record.id)}>
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];
    return (
        <div>
            <MovieGenreAddModal movie={movie} genre={genre} getMovieGenre={getMovieGenre} />
            <Table columns={columns} dataSource={movieGenre} />;
        </div>
    )
}
export default MovieGenreTable;