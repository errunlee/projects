import { createContext, useState,useEffect } from "react";

const MovieContext=createContext();


const MovieProvider=({children})=>{
    const [list,setList]=useState('')
     const [loading,setLoading]=useState(true)
     const [loading1,setLoading1]=useState(true)
     const [showLoader,setShowLoader]=useState(true)
     useEffect(()=>{
     setShowLoader(loading&&loading1)
     },[loading,loading1])
     async function fetchMovies(url){
     setLoading(true)
        const response=await fetch(url)
        const data=await response.json();
        setList(data)
setLoading(false)
        }
        //popular movies
        const popularUrl='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c749165fc96671c286d19d7f046e41e5'
       
        useEffect(()=>{
        fetchMovies(popularUrl)

        },[])
        //

        //suggestions
       
   return  <MovieContext.Provider value={{fetchMovies,list,loading,setLoading,loading1,setLoading1,showLoader,setShowLoader}}>{children}</MovieContext.Provider>
}

export {MovieContext,MovieProvider}