import React from 'react'

function Loading() {
  return (
    <div className='container loader d-flex justify-content-center'>
        <img  src={'./loading2.gif' || 'https://mir-s3-cdn-cf.behance.net/project_modules/max_632/04de2e31234507.564a1d23645bf.gif'} alt='loader gif'/>
    </div>
  )
}

export default Loading