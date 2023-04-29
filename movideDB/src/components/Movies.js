import React, { useEffect } from 'react'
import { useContext } from 'react'
import { MovieContext } from '../context'
import SingleMovie from './SingleMovie'
function Movies() {
    const {fetchMovies,list}=useContext(MovieContext)
    const popularUrl='https://api.themoviedb.org/3/movie/popular?api_key=c749165fc96671c286d19d7f046e41e5'
    useEffect(()=>{
    fetchMovies(popularUrl)
    },[])
    if(!list){
        return;
    }
 return (
    <div>
     {
        list.results.map((movie,index)=>{
            return <SingleMovie key={index} movie={movie}/>
        })
     }
    </div>
  )
}

export default Movies
