import { createContext, useState,useEffect } from "react";

const MovieContext=createContext();


const MovieProvider=({children})=>{
    const [list,setList]=useState('')

   async function fetchMovies(url){
        const response=await fetch(url)
        const data=await response.json();
        setList(data)

        }
        //popular movies
        const popularUrl='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c749165fc96671c286d19d7f046e41e5'
       
        useEffect(()=>{
        fetchMovies(popularUrl)

        },[])
        //

        //suggestions
       
   return  <MovieContext.Provider value={{fetchMovies,list}}>{children}</MovieContext.Provider>
}

export {MovieContext,MovieProvider}