import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar';
import Suggestions from '../components/Suggestions';
import HomeCarousel from '../components/HomeCarousel';
import { MovieContext } from '../context';
import Alert from '../components/manageUser/Alert';
function Homepage() {
  const {showAlert,setShowAlert,msg}=useContext(MovieContext)
  const popularUrl='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c749165fc96671c286d19d7f046e41e5'
  
  useEffect(()=>{
    const ret=setTimeout(()=>{
      setShowAlert(false)
    },3000)
    return (()=>clearTimeout(ret))
  },[showAlert])
  return (
    <div>
      <Navbar/>
      {showAlert &&  <Alert msg={msg}/>}

      <HomeCarousel/>

      <div className="container mt-3">
         <div> 
          <span class="h5 mt-1 mx-2">Top Rated</span>      
      <Suggestions url='https://api.themoviedb.org/3/movie/top_rated?api_key=c749165fc96671c286d19d7f046e41e5'/> 
      </div>
       
      <span class="h5 mt-1">Most popular</span>     
       <Suggestions url={popularUrl}/>
       
      <span class="h5 mt-1">Upcoming releases</span>     
       <Suggestions url={'https://api.themoviedb.org/3/movie/upcoming?api_key=c749165fc96671c286d19d7f046e41e5'}/>
      
      <span class="h5 mt-1">Made in India</span>     
       <Suggestions url='https://api.themoviedb.org/3/discover/movie?api_key=c749165fc96671c286d19d7f046e41e5&with_original_language=hi'/>
      <span class="h5 mt-1">US TV Shows</span>     
       <Suggestions url='https://api.themoviedb.org/3/discover/tv?api_key=c749165fc96671c286d19d7f046e41e5&with_original_language=en&with_origin_country=US'/>

      </div>

    </div>
  )
}

export default Homepage
