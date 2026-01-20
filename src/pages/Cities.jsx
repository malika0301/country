import React from 'react'
import useGet from '../hooks/useGet'
import CountryTable from '../components/CountryTable'

const Cities = () => {
  const { data } = useGet({ url: "cities" })
  return (
    <div>
      <CountryTable data={data} />
    </div>
  )
}

export default Cities