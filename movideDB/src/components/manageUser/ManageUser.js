

import React, { useState,useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './manageuser.css'
import { MovieContext } from '../../context'
import { auth } from '../../firebase'
import UserList from './UserList'
function ManageUser() {
  const [showOpt, setShowOpt] = useState(false)
  const {currentUser,logout}=useContext(MovieContext)
  const [avatar,setAvatar]=useState(null)
  const handleClick = () => {
    setShowOpt(!showOpt)
  }

  useEffect(()=>{
    const avatarImg=currentUser?.photoURL?currentUser.photoURL:'https://t4.ftcdn.net/jpg/03/31/69/91/360_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg'
    setAvatar(avatarImg)
  },[currentUser,currentUser.photoURL])

  return (
    <div className=" ">
      <div className='user-profile mx-3 position-relative btn btn-light ' style={{backgroundImage:`url(${avatar})`}} onClick={handleClick}>
      {showOpt && <div className="position-absolute profile-options border   bg-primary text-light">
        {!currentUser?<div>
        <Link className='text-decoration-none text-light' to='/login'> <p className=' border-bottom  m-0'>Login</p></Link>
       <Link className='text-decoration-none text-light' to='/login'> <p className=' border-bottom  m-0'>Signup</p></Link>
        </div>:
        <div>
          <p className='m-0 border-bottom text-warning lead fw-bold'>{currentUser.displayName}</p>
          <p className='m-0'><Link to='/profile' className='m-0 border-bottom text-decoration-none text-light'>My Profile</Link></p>
          <p className='m-0'><Link to='/mylist' className='m-0 border-bottom text-decoration-none text-light'>My List</Link></p>
          <p className='m-0  bg-none text-light border-0  border-bottom rounded-0 p-0 ' onClick={logout}>Logout</p>
          
          </div>
        }
       </div>}
      </div>
    </div>

  )
}

export default ManageUser
