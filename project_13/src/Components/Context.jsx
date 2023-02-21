import { createContext, useState } from "react";
const AppContext=createContext();
const AppProvider=({children})=>{
    const [showSubMenu,setShowSubMenu]=useState(false)
    const [position,setPosition]=useState(null)
    const [value,setValue]=useState(null)
    const handleHover=(tobeVal,event)=>{
        setShowSubMenu(true);
        setValue(tobeVal)
        console.log(event.target.getBoundingClientRect())
        const pos=(event.target.getBoundingClientRect().left+event.target.getBoundingClientRect().right)/2
        console.log(pos)
        setPosition(pos)
    }
    const handleLeave=()=>{
        setShowSubMenu(false);
    }
    return(
        <AppContext.Provider value={{showSubMenu,handleHover,handleLeave,value,position}}>{children}</AppContext.Provider>
    )
}
export {AppContext,AppProvider};