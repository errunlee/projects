

import React from 'react'

const Alert = ({msg}) => {
  return (
    <div className=' w-100'>
      <div className="alert alert-success fw-bold" role="alert">
 {msg}
</div>
    </div>
  )
}

export default Alert
