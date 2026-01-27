import React from 'react'
import MovieDirectorTable from '../components/MovieDirectorTable';
import useReactQuery from '../pages/useReactQuery';


const MovieDirector = () => {
    const { data: director} = useReactQuery({ key:"directors" , url: "director" });
    const { data: movie} = useReactQuery({ key:"movies" , url: "movie" });
    const { data: movieDirector } = useReactQuery({ key:"movie_directors" , url: "movie_director" });
    return (
        <div>
            <MovieDirectorTable director={director?.data} movie={movie?.data} movieDirector={movieDirector?.data} />
        </div>
    )
}

export default MovieDirector