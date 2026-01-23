import React from 'react'
import useGet from '../hooks/useGet';
import ActorTable from '../components/ActorTable';


const Actor = () => {
  const {data} = useGet({url:"actor"})
  return (
    <div>
      <ActorTable data={data}/>
    </div>
  )
}

export default Actor