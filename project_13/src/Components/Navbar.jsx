import React, { useContext,useRef,useEffect } from 'react'
import data from './data'
import logo from './images/logo.svg'
import Submenu from './Submenu'
import { AppContext } from './Context'

function Navbar() {
    const {showSubMenu,setShowSubMenu,handleHover,handleLeave,position,value}=useContext(AppContext)
    const sumenuRef=useRef(null)
    useEffect(()=>{
    const divWidth=sumenuRef.current.getBoundingClientRect().width;
    sumenuRef.current.style.left=(position-(divWidth/2))+'px'
    },[value])
  return (
    <div className='text-capitalize  '>
      <nav className='d-flex justify-content-around align-items-center my-3'>
        <div className="logo"><img src={logo}/></div>
        <ul className='d-flex align-items-center m-0' >
            {data.map((item,index)=>{
                return <li onMouseEnter={(e)=>{handleHover(index,e)}} onMouseLeave={(e)=>{handleLeave(index,e)}} className='mx-4 text-light links' key={index}>{item.page}</li>
            })}
        </ul>
        <button style={{height:'35px',letterSpacing:'1px'}} className='btn btn-dark py-0'>Sign Up</button>
      </nav>
      <div ref={sumenuRef} onMouseEnter={()=>setShowSubMenu(true)} onMouseLeave={()=>setShowSubMenu(false)} className={`sub shadow-lg position-absolute ${showSubMenu?'':'hidden'}`}>
      { <Submenu/>}
      </div>
  

    </div>
  )
}

export default Navbar
