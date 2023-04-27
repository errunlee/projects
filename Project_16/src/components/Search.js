import React, { useState } from 'react'
import {CiSearch} from 'react-icons/ci'
import {useContext} from 'react'
import { GithubContext } from '../context/Contexthead'
function Search() {
  const {searchUser,setLoading,request}=useContext(GithubContext)
 const [value,setValue]=useState('')
  const handleClick=(e)=>{
    e.preventDefault();
    setLoading(true)
    searchUser(value);
  }
  return (
    <div className='container my-3 form-container'>
      <form onSubmit={handleClick} className=" search-box bg-white px-2 py-1" >
        <div className="input d-flex align-items-center">
        <CiSearch/>
        <input type='text ' required className='p-2 mx-2' placeholder='Enter Github User' onChange={(e)=>setValue(e.target.value)}/>
        </div>
        <button type='submit' className='btn btn-secondary'>Search</button>
      </form>
      <div className="requests mx-4">
        <h3 className='m-0'>Requests : {request} / 60</h3>
      </div>
    </div>
  )
}

export default Search
