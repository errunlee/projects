import { useState,useContext } from "react"
import {Appcontext} from './Context'
export default function Modal(){
  const {showModal,closeModal}=useContext(Appcontext)
  return(
    <>
      { showModal && <div className='card position-fixed' style={{width:'18rem',height:'18rem'}}>
  <h3>modal content</h3>
    <button onClick={closeModal} className='btn btn-danger'>X</button>
  </div>}
    </>
  )
}

