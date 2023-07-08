import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


import React from 'react'

function Skeletoncomp() {
  return (
     <>
     <div className='mx-1'>
              <Skeleton baseColor={'#F5F5F5 '} highlightColor='#424242  ' height={190 } />
              <Skeleton baseColor='#F5F5F5' highlightColor='#424242  ' height={10} />
          </div></>   
          
        
   
  )
}

export default Skeletoncomp
