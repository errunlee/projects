import React, { useState, useEffect } from 'react'
import data from './data'
export default function Slider() {
  let [value, setValue] = useState(0)
  const [person, setPerson] = useState(data[value])
  const handleNextClick = () => {
    if (value < data.length - 1) {
      setValue(value = value + 1)
    }
    else {
      setValue(0)
    }
  }
  const handlePreviousClick = () => {
    if (value > 0) {
      setValue(value = value - 1)
    }
    else {
      setValue(data.length - 1)
    }
  }
  useEffect(() => {
    setPerson(data[value])
  }, [value])

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
      {data.map((item,index) => {
        let position='next-item'
        if(value===index){
          position='active-item'
        }
        if(index===value-1 || (value===0 && index===data.length-1)){
          position='previous-item'
        }
        return <div key={item.id} className={`${position} box-item d-flex flex-column align-items-center px-4`}>
          <img className='shadow-lg my-4' src={item.image} />
          <p className='name m-0'>{item.name}</p>
          <p className='job-title'>{item.title}</p>
          <p className='job-desc my-3'>{item.quote}</p>
          <svg stroke="currentColor" fill="orange" stroke-width="0" viewBox="0 0 512 512" class="icon" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg"><path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path></svg>
        </div>
    
      })} 
      <div className="">
        <button onClick={handlePreviousClick} className='btn bg-none border border-dark previous'><i className="fa-solid fa-chevron-left"></i></button>
        <button onClick={handleNextClick} className='btn bg-none border border-dark next'><i className="fa-solid fa-chevron-right"></i></button>
      </div>
      
    </>
  )
}
