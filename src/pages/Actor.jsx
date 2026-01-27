import React from 'react'
import ActorTable from '../components/ActorTable';
import useReactQuery from './useReactQuery';


const Actor = () => {
  const {data, isLoading } = useReactQuery({url:"actor" , key:"actors"})
  return (
    <div>
      <ActorTable data={data?.data}/>
    </div>
  )
}

export default Actor