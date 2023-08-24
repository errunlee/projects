

import React, { useContext } from 'react'
import UserList from '../components/manageUser/UserList';
import Navbar from '../components/Navbar';
import { MovieContext } from '../context';

function MyList() {
const {currentUser}=useContext(MovieContext)
  return (
    <>
    <Navbar/>
    <div className='container mt-3'>
          <span className="h3 text-warning fw-bold  mx-2">{currentUser.displayName}'s  List</span>      
          <UserList/>
    </div>
    </>
  )
}

export default MyList
