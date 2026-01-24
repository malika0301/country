import React from 'react'
import useGet from '../hooks/useGet'
import GenreTable from '../components/GenreTable'

const Genre = () => {
  const { data , getData } = useGet({ url: "genre" })
  return (
    <div>
      <GenreTable data={data} getData={getData} />
    </div>
  )
}

export default Genre