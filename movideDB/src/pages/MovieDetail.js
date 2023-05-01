import React, { useEffect, useState } from 'react'
import './MovieDetail.css'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { MovieContext } from '../context';
import Navbar from '../components/Navbar';
import Cast from '../components/Cast';
import Suggestions from '../components/Suggestions';
import Loading from '../components/Loader';
function MovieDetail() {
  const {loading,setLoading,loading1,setLoading1,showLoader}=useContext(MovieContext)
  const { id } = useParams();
  const [movie, setMovie] = useState('')
  const [cast, setCast] = useState('')
  const detailUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=c749165fc96671c286d19d7f046e41e5`
  const getData = async () => {
    setLoading(true)
    const res = await fetch(detailUrl);
    const data = await res.json();
    setMovie(data)
    setLoading(false)
  }
  const getCast=async()=>{
    const res=await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c749165fc96671c286d19d7f046e41e5`)
    const data=await res.json();
    setCast(data.cast.slice(0,5))
  }
  useEffect(() => {
    getData();
    getCast();
  }, [id])
  const { budget, genres, original_title, overview, poster_path, release_date, runtime ,production_countries,spoken_languages,status,revenue} = movie
  const imageUrl = poster_path ? `https://image.tmdb.org/t/p/w200${poster_path}` : 'https://picsum.photos/200/300'
 if(showLoader){
  return <Loading/>
 }
  return (
    <div>
      <Navbar />
      {
        movie && <div className='movie-detail container  my-3 p-3'>
          <div className="poster">
            <img src={imageUrl} />
          </div>
          <div className="movieInfos ">
            <h2>{original_title}</h2>
            <div className='movie-info-grid'><div className="left">
              <div className="genre d-flex align-items-center">
                <p>Genre : </p> {genres.map((item, index) => {
                  return <span key={index}> { item.name}{index !== genres.length - 1 ? ', ' : ''} </span>
                })}
              </div>
              <p >Budget : <span>${budget || null}</span></p>            

 <div className="spoken_languages d-flex align-items-center">
                <p>Language/s : </p> {spoken_languages.map((item, index) => {
                  return <span key={index}>{item.name}{index !== spoken_languages.length - 1 ? ', ' : ''}</span>
                })}
              </div>


              <div className="production_countries d-flex align-items-center">
                <p>Country</p> : {production_countries.map((item, index) => {
                  return <span key={index}>{item.name}{index !== production_countries.length - 1 ? ', ' : ''}</span>
                })}
            </div>
            </div>
              <div className="right">
                <p>Status : <span>{status}</span></p>
                <p>Runtime : <span>{runtime} Minutes</span></p>
                <p>Release : <span>{release_date}</span></p>
                <p>Revenue : <span>${revenue}</span> </p>
              </div>
            </div>
            <p className='my-2 fw-lighter text-info font-italic' style={{fontStyle:'italic'}}>{overview}</p>
            <span className='badge bg-info text-white my-2'>Top Cast</span>
            <Cast cast={cast}/>
          </div>

        </div>
        
      }     
      <div className="container">
      <span className="bg-secondary text-light recomendation p-2 fw-bolder">
        You might also like
      </span>
      <Suggestions id={id} suggestUrl={`https://api.themoviedb.org/3/movie/${id}/similar?api_key=c749165fc96671c286d19d7f046e41e5`}/>
      </div>
     
    </div>
  )
}

export default MovieDetail
