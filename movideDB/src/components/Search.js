import React, { useState } from 'react'
import { useContext } from 'react';
import { MovieContext } from '../context';
function Search() {
    const {fetchMovies}=useContext(MovieContext)
    const [value,setValue]=useState('')
    const handleSearch=()=>{
    const searchUrl= `https://api.themoviedb.org/3/search/movie?api_key=c749165fc96671c286d19d7f046e41e5&query=${value}`;
    console.log(searchUrl)
    fetchMovies(searchUrl)
    console.log('fetching')
    }
  return (
    <div>
      <input type='text' placeholder='Search here...' className='p-1 border-0 shadow rounded' onChange={(e)=>setValue(e.target.value)}/>
      <button className='p-1 btn btn-info mx-1'onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search
