import React from 'react'
import { Link } from 'react-router-dom'

function SingleMovie({movie}) {
    const {poster_path}=movie
    const imageUrl=`https://image.tmdb.org/t/p/w200${poster_path}`
  return (
    <div className='singleMovie shadow m-2 p-2' style={{backgroundImage:`url(${imageUrl})`}}>
      <h5>{movie.original_title}</h5>
      <Link to={`/movie/${movie.id}`}>View more</Link>
    </div>
  )
}

export default SingleMovie

