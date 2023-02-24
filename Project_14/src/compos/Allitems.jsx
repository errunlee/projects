import React, { useContext } from 'react'
import CartItem from './CartItem'
import { Appcontext } from '../context/Context'
function Allitems() {
    const {data}=useContext(Appcontext)
    console.log(data)
  return (
    <>
    <h1 className="fw-bolder text-center my-3">Your Bag</h1>
    <div className='container for-width'>
        <div className="cart-items">
        {
            data.length>0 && data.map((item)=>{
                return <CartItem item={item} key={item.id}/>
            })
        }
      </div>
      <hr/>
      <div className="total d-flex justify-content-between">
        <h3 className=''>Total</h3>
        <h4>$2222</h4>
      </div>
    </div>
    </>
  )
}

export default Allitems
