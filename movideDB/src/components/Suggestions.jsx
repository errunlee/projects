import React, { useEffect, useState } from 'react'
import SingleMovie from './SingleMovie'
function Suggestions() {
    const suggestUrl='https://api.themoviedb.org/3/discover/movie?api_key=c749165fc96671c286d19d7f046e41e5&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1'
    const [suggest,setSuggest]=useState('')
    const request=async()=>{
        const res=await fetch(suggestUrl)
        const data=await res.json();
        setSuggest(data.results.slice(0,8))
    }
    useEffect(()=>{
        request();
    },[])
  return (
    <div className='my-2'>
      <span class="badge bg-info p-2">Discover</span>
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
