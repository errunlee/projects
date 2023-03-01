import { createContext,useEffect,useReducer,useState } from "react";
import reducer from "./reducer";
const Appcontext=createContext();

const AppProvider=({children})=>{
    const url='https://course-api.com/react-useReducer-cart-project'

   
    const initialState={
        loading:true,
        total:0,
        amount:0,
        cart:[]
    }
    const [state,dispatch]=useReducer(reducer,initialState)

    const getData=async()=>{
        const data=await fetch(url)
        const response=await data.json();
        dispatch({type:'DISPLAY_ITEMS', payload:response})
    }
    useEffect(()=>{
        getData();
        console.log({...state})
    },[])
    
  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })
  }, [state.cart])
    return(
        <Appcontext.Provider value={{...state,dispatch}}>{children}</Appcontext.Provider>
    )
}
export  {Appcontext,AppProvider}