import { createContext,useEffect,useReducer,useState } from "react";

const Appcontext=createContext();

const AppProvider=({children})=>{
    const [data,setData]=useState([])
    const [totalCount,setTotalCount]=useState(0)
    const [totalAmount,setTotalAmount]=useState(0)
    const url='https://course-api.com/react-useReducer-cart-project'
    const getData=async()=>{
        const data=await fetch(url)
        const response=await data.json();
        setData(response)
    }
    useEffect(()=>{
        getData();
    },[])
    useEffect(() => {
        const amount = data.reduce((total, item) => total + Number.parseFloat(item.price), 0);
        const items = data.reduce((total, item) => total + Number.parseFloat(item.amount), 0);
        setTotalAmount(amount);
        setTotalCount(items)
        console.log(data)
      }, [data]);
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
    const filter=((id)=>{
        const newData=data.filter((item)=>{
            return item.id!==id;
        })
        setData(newData)
    })
    return(
        <Appcontext.Provider value={{data,dispatch,count,setTotalCount,totalCount,totalAmount,setTotalAmount,filter}}>{children}</Appcontext.Provider>
    )
}
export  {Appcontext,AppProvider}