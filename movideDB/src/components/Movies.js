import React, { useEffect } from 'react'
import { useContext } from 'react'
import { MovieContext } from '../context'
import SingleMovie from './SingleMovie'
function Movies() {
    const {loading,list}=useContext(MovieContext)
 return (
    <div>
   <div className='movie-wrapper'>
     {list &&
        list.results.map((movie,index)=>{
            return <SingleMovie key={index} movie={movie}/>
        })
     }
    </div>
    </div>
 
  )
}

export default Movies
