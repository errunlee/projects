import React, { useContext, useEffect, useRef } from 'react'
import { AppContext } from './Context'
import data from './data'
import {FaCreditCard} from 'react-icons/fa'
function Submenu() {
    const {value}=useContext(AppContext);
    const items=data[value].links;
 
  return (
    <div  className='text-capitalize submenu-container d-flex p-5'>
       {items.map((submenu,index)=>{
        return (
            <div className='mx-3' key={index}>
                <a className='text-decoration-none text-dark d-flex align-items-center' href={submenu.url}><FaCreditCard/><p className='mx-2 my-0'>{submenu.label}</p></a>
                </div>
        )
       })}
       
    </div>
  )
}

export default Submenu
