import React from 'react'
import useGet from '../hooks/useGet'
import MovieTable from '../components/MovieTable'

const Movie = () => {
  const { data , getData } = useGet({ url: "movie" })
  return (
    <div>
      <MovieTable data={data} getData={getData} />
    </div>
  )
}

export default Movie