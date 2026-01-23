import React from 'react'
import useGet from '../hooks/useGet'
import DirectorTable from '../components/DirectorTable'

const Director = () => {
  const { data } = useGet({ url: "director" })
  return (
    <div>
      <DirectorTable data={data} />
    </div>
  )
}

export default Director