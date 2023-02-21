import React, { useContext,useRef,useEffect } from 'react'
import data from './data'
import logo from './images/logo.svg'
import Submenu from './Submenu'
import { AppContext } from './Context'

function Navbar() {
    const {showSubMenu,handleHover,handleLeave,position,value}=useContext(AppContext)
    const sumenuRef=useRef(null)
    useEffect(()=>{
    sumenuRef.current.style.left=position+'px'
    console.log(sumenuRef.current)
    },[value])
  return (
    <div className='text-capitalize  position-relative'>
      <nav className='d-flex justify-content-around align-items-center my-3'>
        <div className="logo"><img src={logo}/></div>
        <ul className='d-flex align-items-center m-0' >
            {data.map((item,index)=>{
                return <li onMouseEnter={(e)=>{handleHover(index,e)}} onMouseLeave={()=>{handleLeave(index)}} className='mx-4 text-light' key={index}>{item.page}</li>
            })}
        </ul>
        <button style={{height:'35px',letterSpacing:'1px'}} className='btn btn-dark py-0'>Sign Up</button>
      </nav>
      <div ref={sumenuRef} className="sub shadow-lg position-absolute">
      {showSubMenu && <Submenu/>}
      </div>
  

    </div>
  )
}

export default Navbar
