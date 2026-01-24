import React from 'react'
import useGet from '../hooks/useGet'
import CategoryTable from '../components/CategoryTable'

const Category = () => {
  const { data , getData } = useGet({ url: "category" })
  return (
    <div>
      <CategoryTable data={data} getData={getData} />
    </div>
  )
}

export default Category