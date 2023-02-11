import data from './data'
import { useState } from 'react';
export default function Options({items,setItems}){
  const [selected,setSelected]=useState('all')
  const handleBreakfast=()=>{
    let newItems;
      newItems=data.filter((dish)=>{
       return dish.category==='breakfast';
     })
    setItems(newItems)
    setSelected('breakfast')
  }
  const handleLunch=()=>{
     let newItems;
      newItems=data.filter((dish)=>{
       return dish.category==='lunch';
     })
    setItems(newItems)
    setSelected('lunch')    
  }
  const handleAll=()=>{
     setItems(data)
    setSelected('all')
  }
  const handleShakes=()=>{
     let newItems;
      newItems=data.filter((dish)=>{
       return dish.category==='shakes';
     })
    setItems(newItems)
    setSelected('shakes')
  }
  return(
    <>
    <button className={`btn mx-1 bg-none ${selected==='all'?'current':''}`} onClick={handleAll}>All</button>
    <button className={`btn mx-1 bg-none ${selected==='breakfast'?'current':''}`} onClick={handleBreakfast}>Breakfast</button>
    <button className={`btn mx-1 bg-none ${selected==='lunch'?'current':''}`} onClick={handleLunch}>Lunch</button>
    <button className={`btn mx-1 bg-none ${selected==='shakes'?'current':''}`} onClick={handleShakes}>Shakes</button>
    </>
  )
}