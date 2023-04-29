import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { MovieContext } from '../context';
function MovieDetail() {
    const {id}=useParams();
    const {list}=useContext(MovieContext)
    const selectedMovie= list && list.results.filter((item)=>{
        return item.id==id;
    })[0]
  return (
    <div>
        <p>{id}</p>
        <p>{selectedMovie.original_title}</p>
    </div>
  )
}

export default MovieDetail
