import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Carousel.css'
import {IoIosArrowBack,IoIosArrowForward } from 'react-icons/io'
import {BsInfoCircle} from 'react-icons/bs'
import CaroSkeleton from './CaroSkeleton'
export default function HomeCarousel() {
  let [value, setValue] = useState(0)
  let [movies, setMovies] = useState([])
  const [loading,setLoading]=useState(false)

  // get movies

  const getMovies=async ()=>{
    setLoading(true)
    const url='https://api.themoviedb.org/3/discover/movie?api_key=c749165fc96671c286d19d7f046e41e5&with_original_language=ne'
    const res=await fetch(url)
    const data=await res.json();
    setMovies(data.results.slice(1,7))
    setLoading(false)
  }
  const [person, setPerson] = useState(movies[value])
  const handleNextClick = () => {
    if (value < movies.length - 1) {
      setValue(value = value + 1)
    }
    else {
      setValue(0)
    }
  }
  const handlePreviousClick = () => {
    if (value > 0) {
      setValue(value = value - 1)
    }
    else {
      setValue(movies.length - 1)
    }
  }
  useEffect(() => {
    setPerson(movies[value])
  }, [value])

  useEffect(() => {
    let interval = setInterval(() => {
      handleNextClick()
    }, 10000)

    return () => {
      clearInterval(interval)
    }
  }, [value])

  useEffect(()=>{
    getMovies();
  },[])
  if(loading){
    return <CaroSkeleton/>
  }
  return (
    <div className='carousel-wrapper box d-flex justify-content-center '>
      {movies.length>0 &&
      movies.map((item,index) => {
        let position='next-item'
        if(value===index){
          position='active-item'
        }
        if(index===value-1 || (value===0 && index===movies.length-1)){
          position='previous-item'
        }
        const {poster_path,id,original_title,overview}=item
        const imageUrl=poster_path?`https://image.tmdb.org/t/p/w200${poster_path}`:'https://picsum.photos/200/300'
       
        return <div  key={index} className={`${position}   shadow-lg container-xl box-item d-flex flex-column align-items-center p-4`}>
            <div className='row justify-content-lg-between justify-content-center  align-items-center w-100'>
              <div className="col-md-4 center">
              <img className='rounded' src={imageUrl}></img>

              </div>

              <div className='col-md-8 center center-title mt-3 mt-lg-0'>
                <p className='display-lg-2 display-4 fw-bold'>{original_title}</p>
                <p className='d-lg-block d-none'>{overview}</p>
            <Link className='text-decoration-none' to={`/${id}`}>  <button className='btn btn-sm d-lg-none btn-secondary d-flex align-items-center'><BsInfoCircle/><span className='mx-1'>More Info</span></button></Link>
            <Link className='text-decoration-none' to={`/${id}`}>  <button className='btn btn-lg d-lg-block d-none btn-secondary d-flex align'><BsInfoCircle/><span className='mx-1'>More Info</span></button></Link>
           
                </div>
              </div>
        </div>
    
      })
      } 
      
      <div className="">
        <button onClick={handlePreviousClick} className='btn bg-none  border   border-dark previous text-light'> <IoIosArrowBack  color='white'/></button>
        <button onClick={handleNextClick} className='btn bg-none border border-dark next text-light '><IoIosArrowForward color='white'/></button>
      </div>
    </div>
  )
}
