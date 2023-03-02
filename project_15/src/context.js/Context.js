import { createContext, useEffect, useState } from "react";

const Appcontext=createContext();

const Appprovider=({children})=>{
    const [data,setData]=useState([])
    const [filteredData,setFilteredData]=useState([])
    const [id,setId]=useState(null)
    const getData=async()=>{
        const url='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
        const data=await fetch(url);
        const response=await data.json();
        setData(response.drinks)
        setFilteredData(response.drinks)
    }
    useEffect(()=>{
        getData();
    },[])
    return(
        <Appcontext.Provider value={{data,setData,filteredData,setFilteredData,id,setId}}>{children}</Appcontext.Provider>
    )
}
export {Appcontext,Appprovider}
