import React from 'react'
import { Link } from 'react-router-dom'
function Error() {
  return (
    <div className='vh-100 vw-100 d-flex flex-column justify-content-center align-items-center bg-dark text-white'>
     <h1 className='display-2 fw-bolder'>  404 </h1>
     <p className='lead'>Sorry, the page you are looking for could not be found.</p>
     <Link to='/'><button className='btn btn-info'>BACK HOME</button></Link>
    </div>
  )
}

export default Error
