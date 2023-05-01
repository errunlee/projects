import React, { useEffect } from 'react'
import { useContext } from 'react'
import { MovieContext } from '../context'
import SingleMovie from './SingleMovie'
import Loading from './Loader'
function Movies() {
    const {loading,list}=useContext(MovieContext)    
    
    if(loading){
        return <Loading/>
    }
 return (
    <div>
      <span class="badge bg-info p-2">Most popular</span>
   <div className='movie-wrapper'>
     {
        list.results.map((movie,index)=>{
            return <SingleMovie key={index} movie={movie}/>
        })
     }
    </div>
    </div>
 
  )
}

export default Movies
