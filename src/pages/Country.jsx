import React from 'react'
import useGet from '../hooks/useGet';
import CountryTable from '../components/CountryTable';


const Country = () => {
  const {data} = useGet({url:"countries"})
  return (
    <div>
      <CountryTable data={data}/>
    </div>
  )
}

export default Country