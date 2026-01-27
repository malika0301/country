import React from 'react'
import MovieGenreTable from '../components/MovieGenreTable';
import useReactQuery from '../pages/useReactQuery';


const MovieGenre = () => {
    const { data: genre } = useReactQuery({  key:"genries", url: "genre" });
    const { data: movie } = useReactQuery({ key: "movies", url: "movie" });
    const { data: movieGenre } = useReactQuery({ key:"movie_genries", url: "movie_genre" });
    return (
        <div>
            <MovieGenreTable genre={genre?.data} movie={movie?.data}  movieGenre={movieGenre?.data}/>
        </div>
    )
}

export default MovieGenre