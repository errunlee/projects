import React, { useState,useEffect } from 'react'
import data from './data'
export default function Slider() {
let [value,setValue]=useState(0)
const [person,setPerson]=useState(data[value])
const {id,image,name,title,quote}=person;
const handleNextClick=()=>{
    if(value<data.length-1){
        setValue(value=value+1)
    }
    else{
        setValue(0)
    }
}
const handlePreviousClick=()=>{
    if(value>0){
        setValue(value=value-1)
    }
    else{
        setValue(data.length-1)
    }
}
useEffect(()=>{
  setPerson(data[value])  
},[value])

useEffect(() => {
    let interval = setInterval(() => {
      handleNextClick()
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [value])
  return (
    <>
    <div className='d-flex flex-column align-items-center px-4'>
        <img className='shadow-lg my-4' src={image}/>
        <p className='name m-0'>{name}</p>
        <p className='job-title'>{title}</p>
        <p className='job-desc my-3'>{quote}</p>
    </div>
    <div className="">
        <button onClick={handlePreviousClick}className='btn bg-none border border-dark previous'><i className="fa-solid fa-chevron-left"></i></button>
        <button onClick={handleNextClick} className='btn bg-none border border-dark next'><i className="fa-solid fa-chevron-right"></i></button>
    </div>
    </>
  )
}
