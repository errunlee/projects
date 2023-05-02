import React, { useContext, useEffect, useState } from 'react'
import SingleMovie from './SingleMovie'
import Loading from './Loader'
import { MovieContext } from '../context'
function Suggestions({suggestUrl,id}) {
  const {suggest,request}=useContext(MovieContext)    
 
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
