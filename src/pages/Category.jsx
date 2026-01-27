import React from 'react'
import CategoryTable from '../components/CategoryTable'
import useReactQuery from './useReactQuery';

const Category = () => {
  const { data, isLoading } = useReactQuery({ url: "category", key: "categories" })
  return (
    <div>
      <CategoryTable data={data?.data}/>
    </div>
  )
}

export default Category