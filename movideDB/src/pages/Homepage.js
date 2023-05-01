import React, { useContext } from 'react'
import Navbar from '../components/Navbar';
import Movies from '../components/Movies';
import Suggestions from '../components/Suggestions';
import {MovieContext} from '../context.js'
function Homepage() {
  const suggestUrl='https://api.themoviedb.org/3/discover/movie?api_key=c749165fc96671c286d19d7f046e41e5&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1'
  const {loading,setLoading}=useContext(MovieContext)
  return (
    <div>
      <Navbar/>
      <div className="container">
      <span class="badge bg-info p-2">Discover</span>      
      <Suggestions  suggestUrl={suggestUrl}/>
       <Movies/>
      </div>
     
    </div>
  )
}

export default Homepage
