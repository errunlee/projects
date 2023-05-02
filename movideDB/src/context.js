import { createContext, useState,useEffect } from "react";

const MovieContext=createContext();


const MovieProvider=({children})=>{
    const [list,setList]=useState('')
     const [loading,setLoading]=useState(true)
     async function fetchMovies(url){
        const response=await fetch(url)
        const data=await response.json();
        setList(data)
        }
      
        //

        //suggestions
        const [suggest,setSuggest]=useState('')
        const request=async(suggestUrl)=>{
            const res=await fetch(suggestUrl)
            const data=await res.json();
            setSuggest(data.results.slice(0,8))
        }

   return  <MovieContext.Provider value={{fetchMovies,list,loading,setLoading,suggest,request,setList}}>{children}</MovieContext.Provider>
}

export {MovieContext,MovieProvider}