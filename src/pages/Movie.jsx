import React from 'react'
import MovieTable from '../components/MovieTable'
import useReactQuery from './useReactQuery'

const Movie = () => {
  const { data, isLoading } = useReactQuery({ url: "movie", key: "movies" })

  return (
    <div>
      <MovieTable data={data?.data}/>
    </div>
  )
}

export default Movie