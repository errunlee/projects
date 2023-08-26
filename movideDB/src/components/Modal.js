

import React from 'react'
import './manageUser/profile.css'
const Modal = ({children}) => {
    const handleClose=()=>{
        document.querySelector("#modal").close();
    }
  return (
    <dialog id='modal'>
      {children}
      <button className=' ms-2 close-btn btn btn-warning btn-sm py-1' onClick={handleClose}>Cancel</button>
    </dialog>
  )
}

export default Modal
