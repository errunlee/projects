import { createContext,useState } from "react";
const Appcontext=createContext();

const AppProvider=({children})=>{
 const [show,setShow]=useState(false)
 const [showModal,setShowModal]=useState(false)
 const handleClick=()=>{
   setShow(true)
 }
const closeSidebar=()=>{
  setShow(!show)
}
  const closeModal=()=>{
    setShowModal(false)
  }
  const openModal=()=>{
    setShowModal(true)
  }

  return(
    <Appcontext.Provider value={{show,handleClick,closeSidebar,showModal,openModal,closeModal}}>{children}</Appcontext.Provider>
  )
}
export { Appcontext, AppProvider };
