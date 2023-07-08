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
   

   return  <MovieContext.Provider value={{fetchMovies,list,loading,setLoading,setList}}>{children}</MovieContext.Provider>
}

export {MovieContext,MovieProvider}