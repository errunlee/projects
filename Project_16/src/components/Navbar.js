import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const {isAuthenticated,loginWithRedirect,logout,user,isLoading}=useAuth0();
  const isUser=isAuthenticated && user;

console.log(isAuthenticated,user,isLoading)
  return (
    <div className='bg-white d-flex justify-content-center mb-3'>
      <div className="py-3 d-flex align-items-center">
        {
          isUser && <> <img style={{height:'40px', width:'40px',borderRadius:'50%'}} src={user.picture} alt='avatar' className='mx-2'/>  <p className='m-0 mx-1'>Welcome,</p> <h4 className='fw-bold'>{user.nickname.toUpperCase()}</h4>
      <button onClick={()=>{logout({returnTo:window.location.origin})}}className='btn  mx-3 text-secondary'>Logout</button>
      </>
        }
   {!isUser && <button onClick={loginWithRedirect}className='btn  mx-3 text-secondary'>Login</button>}

      </div>
     
    </div>
  )
}

export default Navbar
