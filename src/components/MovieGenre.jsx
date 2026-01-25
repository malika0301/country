import React from 'react'
import useGet from '../hooks/useGet';
import MovieGenreTable from '../components/MovieGenreTable';


const MovieGenre = () => {
    const { data: genre, getData: getgenre } = useGet({ url: "genre" });
    const { data: movie, getData: getMovie } = useGet({ url: "movie" });
    const { data: movieGenre, getData: getMovieGenre } = useGet({ url: "movie_genre" });
    return (
        <div>
            <MovieGenreTable genre={genre} getgenre={getgenre} movie={movie} getMovie={getMovie} movieGenre={movieGenre} getMovieGenre={getMovieGenre} />
        </div>
    )
}

export default MovieGenre