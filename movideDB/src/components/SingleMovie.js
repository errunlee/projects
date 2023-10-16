import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillPlayCircle} from 'react-icons/ai'

function SingleMovie({movie}) {
    const {poster_path,id}=movie
    const imageUrl=poster_path?`https://image.tmdb.org/t/p/w200${poster_path}`:'https://picsum.photos/200/300'

      const handleClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }

    
  return (
   <Link onClick={handleClick} className='view-link text-decoration-none' to={`/${id}`}> <div className='singleMovie  mx-2 rounded d-flex align-items-end  position-relative my-2' style={{backgroundImage:`url(${imageUrl})`}}>
      <div className="title p-2 w-100 rounded">
      <p className='text-center text-shadow-lg m-0 '>{movie.original_title}</p>
      </div>
      <div className='position-absolute overlay'/>
      <div className="playbtn position-absolute"><AiFillPlayCircle style={{ height: 55, width: 55,color:'purple' }} /></div>
     
    </div></Link>
  )
}

export default SingleMovie

