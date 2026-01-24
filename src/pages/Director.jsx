import React from 'react'
import useGet from '../hooks/useGet'
import DirectorTable from '../components/DirectorTable'

const Director = () => {
  const { data, getData } = useGet({ url: "director" })
  return (
    <div>
      <DirectorTable data={data} getData={getData} />
    </div>
  )
}

export default Director