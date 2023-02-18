import React, { useEffect, useState } from 'react'
import data from './data'
function Genarator() {
  const [length,setLength]=useState(0)
  const [paras,setParas]=useState(data.slice(0,length))
  let [value,setValue]=useState(' ')
  const handleInput=(e)=>{
    setValue(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(value>data.length-1){
      value=data.length-1
    }
    if(value<0){
      value=0;
    }
    setLength(value)
  }
  useEffect(()=>{
setParas(data.slice(0,length))
  },[length])
  return (
    <div>
          <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center info">
          <h3 className='mx-2'>Paragraphs:</h3>
        <input onChange={handleInput} value={value} className='mx-2 p-1' type='number'/>
        <button type='submit' className="btn btn-dark mx-2 py-0">GENERATE</button>
        </div>
        </form>
        <div className="paras">
          {paras.map((item,index)=>{
            return <p key={index}>{item}</p>
          })}
        </div>
    </div>
  )
}

export default Genarator
