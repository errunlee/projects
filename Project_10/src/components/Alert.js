import React from 'react'

export default function Alert({message,type}) {
  return (
    <div style={{width:'80%',fontWeight:'bold'}}>
      <p className={`bg-${type} rounded text-light p-1 text-center`}>{message}</p>
    </div>
  )
}
