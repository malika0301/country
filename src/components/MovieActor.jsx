import React from 'react'
import useGet from '../hooks/useGet';
import MovieActorTable from '../components/MovieActorTable';


const MovieActor = () => {
    const { data: actor, getData: getActor } = useGet({ url: "actor" });
    const { data: movie, getData: getMovie } = useGet({ url: "movie" });
    const { data: movieActor, getData: getMovieActor } = useGet({ url: "movie_actor" });
    return (
        <div>
            <MovieActorTable actor={actor} getActor={getActor} movie={movie} getMovie={getMovie} movieActor={movieActor} getMovieActor={getMovieActor} />
        </div>
    )
}

export default MovieActor