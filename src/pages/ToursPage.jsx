import React from 'react'
import useGet from '../hooks/useGet'
import CountryTable from '../components/CountryTable'

const ToursPage = () => {
  const { data } = useGet({ url: "subtours" })
  return (
    <div>
      <CountryTable data={data} />
    </div>
  )
}

export default ToursPage