import React, { useEffect, useState } from 'react'
import SingleMovie from './SingleMovie'

function Suggestions() {
    const suggestUrl='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c749165fc96671c286d19d7f046e41e5'
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
    <div>
      <span class="badge bg-info p-3">Discover</span>
      <div className="suggestions d-flex justify-content-center">
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
