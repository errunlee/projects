import { createContext, useState } from "react";
const AppContext=createContext();
const AppProvider=({children})=>{
    const [showSubMenu,setShowSubMenu]=useState(false)
    const [value,setValue]=useState(null)
    const handleHover=(tobeVal)=>{
        setShowSubMenu(true);
        setValue(tobeVal)
    }
    const handleLeave=()=>{
        setShowSubMenu(false);
    }
    return(
        <AppContext.Provider value={{showSubMenu,handleHover,handleLeave,value}}>{children}</AppContext.Provider>
    )
}
export {AppContext,AppProvider};