import data from './data'
import { useState } from 'react'
export default function Accordion() {
  const [selectedId,setSelectedId]=useState([])
  const [more,setMore]=useState(false)
  const handleClick=(id)=>{
    if(!selectedId.includes(id)){
    setSelectedId(selectedId.concat(id))
    }
    else{
      setSelectedId(selectedId.filter((item)=>{
        return item!==id
      }))
    }
  }
  const show={
    'display':'initial'
  }
  const hide={
    'display':'none'
  }
  return (
    <>
      <div className='container'>
        <div className='box'>
          <div className='item'>
            <h1>Question and Answers about Login</h1>
          </div>

          <div className='item'>
           {data.map((item)=>{
              return <div className='solo' key={item.id}><div style={{'display':'flex','justifyContent':'space-between','alignItems':'center'}}><span>{item.title}</span><button onClick={()=>{handleClick(item.id)}}>{selectedId.includes(item.id)?'-':'+'}</button></div><p style={selectedId.includes(item.id)?show:hide}>{item.info}</p></div>
           })}
          </div>

        </div>
      </div>
    </>
  )
}