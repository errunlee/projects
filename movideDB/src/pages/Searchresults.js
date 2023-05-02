import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Movies from '../components/Movies'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { MovieContext } from '../context';

function Searchresults() {
    
    const {fetchMovies,setLoading,loading,setList}=useContext(MovieContext)
    const {query}=useParams()
       
    useEffect(()=>{
        const searchUrl= `https://api.themoviedb.org/3/search/movie?api_key=c749165fc96671c286d19d7f046e41e5&query=${query}`;        
        setList(null)
        setLoading(true)
        fetchMovies(searchUrl)
        setLoading(false)
    },[query])
   
  return (
    <div>
      <Navbar/>
      {loading && <h1 className='display-6 text-center'>Loading...</h1>}
      {!loading &&
      <div>
      <p className="bg-secondary text-light p-3 my-3 d-inline-block">Search results for : <span className='fw-bold text-info'>{query}</span></p>
      <Movies/>
      </div>
}
    </div>
  )
}

export default Searchresults
