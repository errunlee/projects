import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Search() {
    const [query,setQuery]=useState('')
   
  return (
    <form>
      <input type='text' placeholder='Search here...' className='p-2 border-0 shadow mx-1' onChange={(e)=>setQuery(e.target.value)}/>
      <Link to={`/search/${query}`}><button className='p-2 rounded-0 btn btn-info mx-1'>Search</button></Link>
    </form>
  )
}

export default Search
