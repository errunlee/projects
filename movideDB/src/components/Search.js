import React, { useState,useRef,useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './search.css'
function Search() {
    const [query,setQuery]=useState('')
    const [search,setSearch]=useState(false)
    const buttonRef=useRef();
    const inputRef=useRef();
    const navigate=useNavigate()
  

    const handleHover=()=>{
      document.querySelectorAll('.search-input')[0].classList.add('showInput')
      inputRef.current.focus();
    }
    const handleLeave=()=>{
      document.querySelectorAll('.search-input')[0].classList.remove('showInput')
      inputRef.current.blur();
    }
    const handleSearch=(e)=>{
      e.preventDefault();
      if(inputRef.current.value===''){
        return;
      }
      navigate(`/search/${query}`)
    }
  return (
    <form onSubmit={handleSearch} className='border border-light d-flex search-form' onMouseLeave={handleLeave}>
    <input ref={inputRef} type='text' placeholder='Search here...' className=' border-0 bg-dark text-light search-input' onChange={(e)=>setQuery(e.target.value)}/>
     <button  ref={buttonRef} onMouseOver={handleHover}  className='p-2 border-0 btn rounded-0 bg-dark'><FaSearch color='white'/></button>
    </form>
  )
}

export default Search
