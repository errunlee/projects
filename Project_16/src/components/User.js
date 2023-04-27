import React, { useRef, useState } from 'react'
import Card from './Card'
import Followers from './Followers'
function User() {
  const [height,setHeight]=useState(null)
  return (
    <div className='user-section my-5'>
      <div   className="section bg-white mx-2 bg-white">
      <Card setHeight={setHeight}></Card>
      </div>
      <div  className="section bg-white mx-2 bg-white">
      <Followers height={height}/>
      </div>
    </div>
  )
}

export default User
