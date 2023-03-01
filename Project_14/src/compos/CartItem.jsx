import React, { useContext, useEffect, useReducer } from 'react'
import {AiOutlineArrowUp,AiOutlineArrowDown} from 'react-icons/ai'
import { Appcontext } from '../context/Context';
export default function CartItem({item}) {
    const {title,id,price,img,amount}=item;
    const {totalAmount,totalItem,dispatch}=useContext(Appcontext)
    // console.log(totalItem)
    const handleLow=(id)=>{
        dispatch({type:'decrease',payload:id})
    }
    const handleHigh=(id)=>{
        dispatch({type:'increase',payload:id})
    }
  return (
    <div className='d-flex justify-content-between item-container align-items-center'>
        <div className="d-flex align-items-center">
        <img className=' mx-3 rounded' src={img} />
        <div>
            <p className='text-capitalize m-1'>{title}</p>
            <p className='text-capitalize m-1'>${price}</p>
            <button className="btn px-1 text-primary" onClick={()=>{dispatch({type:'REMOVE',payload:id})}}>remove</button>
        </div>
        </div>

        <div className='d-flex flex-column align-items-center'>
            <button onClick={()=>{handleHigh(id)}} className="btn p-0 m-0"><AiOutlineArrowUp/></button>
            <p className='m-0'>{amount}</p>
            <button onClick={()=>{handleLow(id)}} className="btn p-0 m-0"><AiOutlineArrowDown/></button>
        </div>
    </div>
  )
}
