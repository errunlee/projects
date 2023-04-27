import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Loading from './Loading';
function Authwrapper({children}) {
    const {isLoading,error}=useAuth0();
    if(isLoading){
        return <Loading/>
    }
    if(error){
        console.log(error)
    }
    return <> {children}</>
}

export default Authwrapper
