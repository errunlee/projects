import React, { useContext } from 'react'
import {BsCart4} from 'react-icons/bs'
import { Appcontext } from '../context/Context'
function Navbar() {
    const {amount}=useContext(Appcontext)
  return (
    <div className='nav-container py-2 bg-primary text-white d-flex justify-content-center'>
      <div className=" d-flex justify-content-between  for-width align-items-center">
        <h2 className='fw-bold'>Cart Manager</h2>
        <p className='m-0 position-relative'><BsCart4 size={35}/>
        <span className='position-absolute badge'>{amount}</span>
        </p>
      </div>
    </div>
  )
}

export default Navbar
