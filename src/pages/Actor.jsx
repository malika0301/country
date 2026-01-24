import React from 'react'
import useGet from '../hooks/useGet';
import ActorTable from '../components/ActorTable';


const Actor = () => {
  const {data , getData} = useGet({url:"actor"})
  return (
    <div>
      <ActorTable getData={getData} data={data}/>
    </div>
  )
}

export default Actor