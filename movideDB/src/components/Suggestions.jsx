import React, { useContext, useEffect, useState } from 'react'
import SingleMovie from './SingleMovie'
import Loading from './Loader'
import { MovieContext } from '../context'
function Suggestions({suggestUrl,id}) {
  const {loading1,setLoading1}=useContext(MovieContext)
    const [suggest,setSuggest]=useState('')
    const request=async()=>{
      setLoading1(true)
        const res=await fetch(suggestUrl)
        const data=await res.json();
        setSuggest(data.results.slice(0,8))
        setLoading1(false)
    }
    useEffect(()=>{
        request();
    },[id])
  return (
    <div className='my-2'>
      <div className="suggestions movie-wrapper">
      {suggest.length>0 &&
        suggest.map((movie)=>{
            return <SingleMovie key={movie.id} movie={movie}/>
        })
      }
      </div>
     
    </div>
  )
}

export default Suggestions
