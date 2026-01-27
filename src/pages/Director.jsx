import React from 'react'
import DirectorTable from '../components/DirectorTable'
import useReactQuery from './useReactQuery'

const Director = () => {
  const { data, isLoading } = useReactQuery({ url: "director", key: "directors" })
  return (
    <div>
      <DirectorTable data={data?.data} />
    </div>
  )
}

export default Director