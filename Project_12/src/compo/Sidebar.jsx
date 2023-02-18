import { useState,useContext } from "react"
import {Appcontext} from './Context'
export default function Sidebar(){
  const {show,closeSidebar}=useContext(Appcontext)
  return(
    <>
  {show && <div className='d-flex justify-content-between sidebar-container'>
     <ul>
     <li>Home</li>
     <li>Prices</li>
     <li>Godown</li>
     </ul>
    <button onClick={closeSidebar}className='btn btn-primary'>X</button>
   </div>}
    </>
  )
}

