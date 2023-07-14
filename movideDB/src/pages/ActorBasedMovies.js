import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Movies from '../components/Movies'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { MovieContext } from '../context';

function ActorBasedMovies() {
    const {fetchMovies,setLoading,loading,setList}=useContext(MovieContext)
    useEffect(()=>{
        const userIdUrl=``
    },[])
  return (
    <div>
      <Navbar/>
      {loading && <h1 className='display-6 text-center'>Loading...</h1>}
      {!loading &&
      <div>
      <p className="bg-secondary text-light p-3 my-3 d-inline-block">Actor Movies <span className='fw-bold text-info'></span></p>
      <Movies/>
      </div>
}
    </div>
  )
}

export default Searchresults
