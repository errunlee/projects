import { createContext, useState,useEffect } from "react";
import {onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import {signOut } from 'firebase/auth'

const MovieContext=createContext();


const MovieProvider=({children})=>{
    const [list,setList]=useState('')
    const [loading,setLoading]=useState(true)
   const [currentUser,setCurrentUser]=useState(null)
   const [showAlert,setShowAlert]=useState(false)
   const [msg,setMsg]=useState('')
    useEffect(()=>{
      const unsub= onAuthStateChanged(auth, (user) => {
         if (user) {            
           setCurrentUser(user)
         } else {
           setCurrentUser(null)
         }
       });

       return(()=>{unsub()})
    },[])
   
   //  get movies
     async function fetchMovies(url){
        const response=await fetch(url)
        const data=await response.json();
        setList(data)
     }
      
 
   // Logout user
     const logout=()=>{
      signOut(auth);
      setShowAlert(true)
      setMsg('Logged Out Successfully')
    }
   

   return  <MovieContext.Provider value={{fetchMovies,list,loading,setLoading,setList,currentUser,logout,showAlert,setShowAlert,msg,setMsg}}>{children}</MovieContext.Provider>
}

export {MovieContext,MovieProvider}