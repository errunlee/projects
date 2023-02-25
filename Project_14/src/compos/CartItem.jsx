import React, { useContext, useEffect, useReducer } from 'react'
import {AiOutlineArrowUp,AiOutlineArrowDown} from 'react-icons/ai'
import { Appcontext } from '../context/Context';
export default function CartItem({item}) {
    const {title,id,price,img,amount}=item;
    const {totalCount,setTotalCount,totalAmount,setTotalAmount,filter}=useContext(Appcontext)
    const reducer=(state,action)=>{
        if(action.type==='increase'){
            return state+1;
        }
        if(action.type==='decrease'){
            return state-1;
        }
    }
    const [itemCount,itemDispatch]=useReducer(reducer,amount)
    const handleLow=()=>{
        itemDispatch({type:'decrease'})
        if(itemCount<2){
            filter(id);
            return;
        }
        setTotalCount(totalCount-1)  ;
        setTotalAmount(parseFloat((totalAmount - Number.parseFloat(price)).toFixed(2)));
    }
  return (
    <div className='d-flex justify-content-between item-container align-items-center'>
        <div className="d-flex align-items-center">
        <img className=' mx-3 rounded' src={img} />
        <div>
            <p className='text-capitalize m-1'>{title}</p>
            <p className='text-capitalize m-1'>${price}</p>
            <button className="btn px-1 text-primary" onClick={()=>{filter(id)}}>remove</button>
        </div>
        </div>

        <div className='d-flex flex-column align-items-center'>
            <button onClick={()=>{
                itemDispatch({type:'increase'});
                setTotalCount(totalCount+1)  
                setTotalAmount(parseFloat((totalAmount + Number.parseFloat(price)).toFixed(2)));
            }} className="btn p-0 m-0"><AiOutlineArrowUp/></button>
            <p className='m-0'>{itemCount}</p>
            <button onClick={handleLow} className="btn p-0 m-0"><AiOutlineArrowDown/></button>
        </div>
    </div>
  )
}
