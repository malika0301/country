import React from 'react'
import useGet from '../hooks/useGet'
import CountryTable from '../components/CountryTable'

const Hotels = () => {
  const { data } = useGet({ url: "hotels" })
  return (
    <div>
      <CountryTable data={data} />
    </div>
  )
}

export default Hotels