import { createContext,useEffect,useReducer,useState } from "react";

const Appcontext=createContext();

const AppProvider=({children})=>{
    const [data,setData]=useState([])
    const [totalCount,setTotalCount]=useState(null)
    const url='https://course-api.com/react-useReducer-cart-project'
    const getData=async()=>{
        const data=await fetch(url)
        const response=await data.json();
        setData(response)
    }
    useEffect(()=>{
        getData();
    },[])
    const reducer=(state,action)=>{
       if(action.type==='increase'){
        return state+1;
       }
       if(action.type==='decrease'){
        return state-1;
       }
    }
    const initial=1;
    const [count,dispatch]=useReducer(reducer,initial)
    return(
        <Appcontext.Provider value={{data,dispatch,count,setTotalCount,totalCount}}>{children}</Appcontext.Provider>
    )
}
export  {Appcontext,AppProvider}