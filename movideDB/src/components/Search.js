import React, { useState,useRef,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './search.css'
function Search() {
    const [query,setQuery]=useState('')
    const [showInput,setShowInput]=useState(false)
    const buttonRef=useRef();
    const inputRef=useRef();

  

    const handleHover=()=>{
      document.querySelectorAll('.search-input')[0].classList.add('showInput')
    }
    const handleLeave=()=>{
      document.querySelectorAll('.search-input')[0].classList.remove('showInput')
    }
  return (
    <form className='border border-light d-flex ' onMouseLeave={handleLeave}>
    <input ref={inputRef} type='text' placeholder='Search here...' className=' border-0 bg-dark text-light search-input' onChange={(e)=>setQuery(e.target.value)}/>
      <Link to={`/search/${query}`}><button ref={buttonRef} onMouseOver={handleHover}  className='p-2 border-0 btn rounded-0 bg-dark'><FaSearch color='white'/></button></Link>
    </form>
  )
}

export default Search
