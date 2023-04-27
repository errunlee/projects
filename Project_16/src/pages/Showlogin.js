import React from 'react'
import {Link} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

function Showlogin() {
const {loginWithRedirect,isAuthenticated}=useAuth0();
console.log(isAuthenticated)
  return (
    <div className='homepage-container vh-100 vw-100 d-flex flex-column justify-content-center align-items-center'>
      <img className='login-img' src="./images/login-img.svg"/>
      <h1 className='display-2 fw-bolder my-3'>Github User</h1>
      <Link to='/'> <button onClick={loginWithRedirect} className='btn btn-primary  ls-2 px-3 py-1'>LOG IN/SIGN UP</button></Link>
    </div>
  )
}

export default Showlogin
