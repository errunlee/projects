import React, { useContext, useEffect, useReducer } from 'react'
import {AiOutlineArrowUp,AiOutlineArrowDown} from 'react-icons/ai'
import { Appcontext } from '../context/Context';
export default function CartItem({item}) {
    const {title,id,price,img,amount}=item;
    const {totalCount,setTotalCount}=useContext(Appcontext)
    const reducer=(state,action)=>{
        if(action.type==='increase'){
            return state+1;
        }
        if(action.type==='decrease'){
            return state-1;
        }
    }
    const [itemCount,itemDispatch]=useReducer(reducer,amount)
  return (
    <div className='d-flex justify-content-between item-container align-items-center'>
        <div className="d-flex align-items-center">
        <img className=' mx-3 rounded' src={img} />
        <div>
            <p className='text-capitalize m-1'>{title}</p>
            <p className='text-capitalize m-1'>${price}</p>
            <button className="btn px-1 text-primary">remove</button>
        </div>
        </div>

        <div className='d-flex flex-column align-items-center'>
            <button onClick={()=>{
                itemDispatch({type:'increase'});
                setTotalCount(totalCount+1)            
            }} className="btn p-0 m-0"><AiOutlineArrowUp/></button>
            <p className='m-0'>{itemCount}</p>
            <button onClick={()=>{
                itemDispatch({type:'decrease'})
                setTotalCount(totalCount-1)            
                
                }} className="btn p-0 m-0"><AiOutlineArrowDown/></button>
        </div>
    </div>
  )
}
