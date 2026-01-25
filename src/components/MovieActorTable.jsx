import React, {  } from 'react';
import { Button, Flex, Image, Space, Table, Tag } from 'antd';
import { FaTrash } from 'react-icons/fa';
import MovieActorAddModal from './MovieActorAddModal';
import axios from 'axios';
import { toast } from 'react-toastify';


const MovieActorTable = ({ actor, movie, movieActor, getMovieActor }) => {

    async function deleteMovieActor(id) {
        try {
            await axios.delete(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie_actor/${id}`)
            toast.success("Movie and Actor deleted!");
            getMovieActor();
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
            title: 'Actor Name',
            dataIndex: 'actor_id',
            key: 'name',
            render: (text) => {
                return <p>{actor?.find((el) => el.id === text)?.full_name}</p>
            },
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'year',
            render: text => <p>{text}</p>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button danger onClick={() => deleteMovieActor(record.id)}>
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];
    return (
        <div>
            <MovieActorAddModal movie={movie} actor={actor} getMovieActor={getMovieActor} />
            <Table columns={columns} dataSource={movieActor} />;
        </div>
    )
}
export default MovieActorTable;