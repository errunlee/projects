import React, { useReducer, useState } from 'react'

function Reducerlearn() {
    // const [count,setCount]=useState(0)
    const initialState=0;
    const reducer=(state,action)=>{
        if(action.type==='inc'){
            return state+1
        }
        if(action.type==='dec'){
            return state-1;
        }
    }
    const [state,dispatch]=useReducer(reducer,initialState);

  return (
    <div>
        <h1>{state}</h1>
      <button onClick={()=>{dispatch({type:'inc'})}}>Increase</button>
      <button onClick={()=>{dispatch({type:'dec'})}}>Decrease</button>
    </div>
  )
}

export default Reducerlearn
