import React, { useEffect } from 'react'
import { useContext } from 'react'
import { MovieContext } from '../context'
import SingleMovie from './SingleMovie'
function Movies() {
    const {loading,list}=useContext(MovieContext)
 return (
    <div className='container-md'>
   <div className='movie-wrapper row '>
     {list &&
        list.results.map((movie,index)=>{
            return<div  className='col-6 col-md-4 col-lg-2'> <SingleMovie key={index} movie={movie}/></div>
        })
     }
    </div>
    </div>
 
  )
}

export default Movies
