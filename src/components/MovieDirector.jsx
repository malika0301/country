import React from 'react'
import useGet from '../hooks/useGet';
import MovieDirectorTable from '../components/MovieDirectorTable';


const MovieDirector = () => {
    const { data: director, getData: getDirector } = useGet({ url: "director" });
    const { data: movie, getData: getMovie } = useGet({ url: "movie" });
    const { data: movieDirector, getData: getMovieDirector } = useGet({ url: "movie_director" });
    return (
        <div>
            <MovieDirectorTable director={director} getDirector={getDirector} movie={movie} getMovie={getMovie} movieDirector={movieDirector} getMovieDirector={getMovieDirector} />
        </div>
    )
}

export default MovieDirector