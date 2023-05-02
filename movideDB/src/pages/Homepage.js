import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar';
import Movies from '../components/Movies';
import Suggestions from '../components/Suggestions';
import {MovieContext} from '../context.js'
import Loading from '../components/Loader';
function Homepage() {
  const suggestUrl='https://api.themoviedb.org/3/discover/movie?api_key=c749165fc96671c286d19d7f046e41e5&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1'
  const popularUrl='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c749165fc96671c286d19d7f046e41e5'
  const {loading,setLoading,fetchMovies,request,isSearch}=useContext(MovieContext)
  
useEffect(() => {
  Promise.all([fetchMovies(popularUrl), request(suggestUrl)]).then(() => {
    setLoading(false);
  }).catch((error) => {
    console.error(error);
  });
}, []);
if(loading)
{
  return <>
  <Navbar/>
  <Loading/>
  </>
}  return (
    <div>
      <Navbar/>
      
      <div className="container">
         <div> <span class="badge bg-info p-2">Discover</span>      
      <Suggestions  suggestUrl={suggestUrl}/></div>
      <span class="badge bg-info p-2">Most popular</span>
     
       <Movies/>
      </div>
     
    </div>
  )
}

export default Homepage
