import React, { useContext } from 'react'
import CartItem from './CartItem'
import { Appcontext } from '../context/Context'
import Loading from './Loading'
function Allitems() {
    const {cart,total,loading,dispatch}=useContext(Appcontext)
  return (
    <>
    <h1 className="fw-bolder text-center my-3">Your Bag</h1>
    {!loading && <div className='container for-width'>
        <div className="cart-items">
        {
            cart && cart.map((item)=>{
                return <CartItem item={item} key={item.id}/>
            })
        }
      </div>
      <hr/>
      { cart.length>0 && <><div className="total d-flex justify-content-between">
        <h3 className=''>Total</h3>
        <h4>${total}</h4>
       
      </div>
      <div className="d-flex justify-content-center">
      <button className="btn btn-danger" onClick={()=>{dispatch({type:'CLEAR'})}}>CLEAR ALL</button>

      </div>
      </>
      }
    {cart.length<1 && <p className='display-4 text-center'>No items to show :/</p>}

    </div>}

    {loading && <Loading/>}
    </>
  )
}

export default Allitems
