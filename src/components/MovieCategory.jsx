import React from 'react'
import useGet from '../hooks/useGet';
import MovieCategoryTable from '../components/MovieCategoryTable';


const MovieCategory = () => {
    const { data: category, getData: getCategory } = useGet({ url: "category" });
    const { data: movie, getData: getMovie } = useGet({ url: "movie" });
    const { data: movieCategory, getData: getMovieCategory } = useGet({ url: "movie_category" });
    return (
        <div>
            <MovieCategoryTable category={category} getCategory={getCategory} movie={movie} getMovie={getMovie} movieCategory={movieCategory} getMovieCategory={getMovieCategory} />
        </div>
    )
}

export default MovieCategory