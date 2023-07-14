

import React, { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import './manageuser.css'
import { MovieContext } from '../../context'
import { auth } from '../../firebase'
import {signOut } from 'firebase/auth'
function ManageUser() {
  const [showOpt, setShowOpt] = useState(false)
  const {currentUser,logout}=useContext(MovieContext)
  console.log(currentUser)

  const handleClick = () => {
    setShowOpt(!showOpt)
  }

  
  return (
    <div className=" ">
      <div className='user-profile mx-3 position-relative ' onClick={handleClick}>
      {showOpt && <div className="position-absolute profile-options border p-3 ps-1 bg-dark">
        {!currentUser?<div>
        <Link className='text-decoration-none text-light' to='/login'> <p className=' border-bottom  m-0'>Login</p></Link>
       <Link className='text-decoration-none text-light' to='/login'> <p className=' border-bottom  m-0'>Signup</p></Link>
        </div>:
        <div>
          <p className='m-0 border-bottom text-primary lead fw-bold'>{currentUser.displayName}</p>
          <p className='m-0 border-bottom'>My Profile</p>
          <p className='m-0 border-bottom'>My List</p>
          <p className='m-0 btn bg-none text-light border-0  border-bottom rounded-0 p-0' onClick={logout}>Logout</p>
          
          </div>
        }
       </div>}
      </div>
    </div>

  )
}

export default ManageUser
