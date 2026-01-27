import React from 'react'
import MovieActorTable from '../components/MovieActorTable';
import useReactQuery from '../pages/useReactQuery';


const MovieActor = () => {
    const { data: actor } = useReactQuery({ url: "actor" , key:"actors" });
    const { data: movie} = useReactQuery({ url: "movie" , key:"movies" });
    const { data: movieActor } = useReactQuery({ url: "movie_actor" , key:"movie_actors" });
    return (
        <div>
            <MovieActorTable actor={actor?.data} movie={movie?.data} movieActor={movieActor?.data} />
        </div>
    )
}

export default MovieActor