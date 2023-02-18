import { Appcontext } from "./Context"
import {useContext} from 'react'
  export default function Home(){
  const {show,showModal, handleClick,openModal}=useContext(Appcontext)
    
  return(    
   <>
        <div className={`${showModal?'overlay':''}`}></div>
     <div className='body'>
     {  !show && <button onClick={handleClick} className="btn"><img src='../image.png' alt='arun'/></button>}
     <button onClick={openModal} className='btn btn-secondary m-auto'>SHOW MODAL</button>
     </div>
     </>
  )
}