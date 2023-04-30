import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { MovieContext } from '../context';
import Navbar from '../components/Navbar';
function MovieDetail() {
    const {id}=useParams();
    const [movie,setMovie]=useState('')
    const detailUrl=`https://api.themoviedb.org/3/movie/${id}?api_key=c749165fc96671c286d19d7f046e41e5`
    const getData=async()=>{
      const res=await fetch(detailUrl);
      const data=await res.json();
      setMovie(data)
    }
    useEffect(()=>{
      getData();
    },[])
    const {budget,genres,original_title,overview,poster_path,release_date,runtime}=movie
    const imageUrl=poster_path?`https://image.tmdb.org/t/p/w200${poster_path}`:'https://picsum.photos/200/300'
  return (
    <div>
      <Navbar/>
      {
        movie && <div className='movie-detail container border my-3 p-3'>
          <div className="poster">
            <img src={imageUrl}/>
          </div>
          <div className="movieInfos border">
          <h2>{original_title}</h2>
          <div className='d-flex justify-content-between'><div className="left">
            <p>Genre</p>
            <p>Director</p>
            <p>Actor</p>
            <p>Country</p>
          </div>
          <div className="right">
            <p>Post Updated</p>
            <p>Duration</p>
            <p>Runtime</p>
            <p>Release</p>
          </div>
          </div>
          
          </div>
        </div>
      }
    </div>
  )
}

export default MovieDetail
