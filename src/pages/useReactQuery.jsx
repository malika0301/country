import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const useReactQuery = ({url , key}) => {
    const getData = async () => await axios.get(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/${url}`)
    const { data, isLoading } = useQuery({
        queryKey: [key],
        queryFn: getData,
        staleTime: 6 * 1000 * 5
    })
  return { data , isLoading}
}

export default useReactQuery