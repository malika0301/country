import React from 'react'
import useGet from '../hooks/useGet'
import MovieTable from '../components/MovieTable'

const Movie = () => {
  const { data } = useGet({ url: "movie" })
  return (
    <div>
      <MovieTable data={data} />
    </div>
  )
}

export default Movie