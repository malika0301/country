import React from 'react'
import MovieCategoryTable from '../components/MovieCategoryTable';
import useReactQuery from '../pages/useReactQuery';


const MovieCategory = () => {
    const { data: category } = useReactQuery({ url: "category", key:"categories" });
    const { data: movie } = useReactQuery({ url: "movie", key:"movies" });
    const { data: movieCategory} = useReactQuery({ url: "movie_category" , key:"movie_categories" });
    return (
        <div>
            <MovieCategoryTable category={category?.data}  movie={movie?.data} movieCategory={movieCategory?.data}  />
        </div>
    )
}

export default MovieCategory