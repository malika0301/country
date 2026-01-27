import React from 'react'
import GenreTable from '../components/GenreTable'
import useReactQuery from './useReactQuery'

const Genre = () => {
  const { data, isLoading } = useReactQuery({ url: "genre", key: "genries" })

  return (
    <div>
      <GenreTable data={data?.data} />
    </div>
  )
}

export default Genre