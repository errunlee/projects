import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
    <div className="fluid-container shadow d-flex justify-content-center align-items-center">
    <div className="d-flex justify-content-between align-items-center nav p-3 text-success ">
    <div className='title'>The<strong><i>Cocktail</i></strong>DB</div>
    <div className="links d-flex">
        <Link to='/' className='mx-2 my-0'><p className='m-0'>Home</p></Link>
        <Link to='/about' className='mx-2 my-0'><p className='m-0'>About</p></Link>
       
    </div>
   </div>
    </div>
   
   </>
  )
}

export default Navbar