


import React, { useContext } from 'react'
import { MovieContext } from '../context'
import { Navigate, useNavigate } from 'react-router-dom'
const Protectedroute = ({children}) => {
    const {currentUser}=useContext(MovieContext)
    if(!currentUser){
       return <Navigate to='/login'/>
    }
  return (
    <div>
      {children}
    </div>
  )
}

export default Protectedroute
