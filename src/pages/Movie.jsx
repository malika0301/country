import React from 'react'
import useGet from '../hooks/useGet'
import ActorTable from '../components/ActorTable'

const Movie = () => {
  const { data } = useGet({ url: "movie" })
  return (
    <div>
      <ActorTable data={data} />
    </div>
  )
}

export default Movie