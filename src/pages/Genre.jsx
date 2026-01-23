import React from 'react'
import useGet from '../hooks/useGet'
import GenreTable from '../components/GenreTable'

const Genre = () => {
  const { data } = useGet({ url: "Genre" })
  return (
    <div>
      <GenreTable data={data} />
    </div>
  )
}

export default Genre