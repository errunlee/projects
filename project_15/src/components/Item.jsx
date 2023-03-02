import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Appcontext } from '../context.js/Context'
function Item({item}) {
    const {setId}=useContext(Appcontext)
  return (
    <div>
       <div className="card my-2" style={{width:'20rem'}}>
  <img className="card-img-top" src={item.strDrinkThumb} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{item.strDrink}</h5>
    <p className="card-text">{item.strGlass}</p>
    <p className="card-text">{item.strAlcoholic}</p>
    <Link to={`/info`} className="btn btn-primary" onClick={()=>{setId(item.idDrink)}} >Details</Link>
  </div>
</div> 
    </div>
  )
}

export default Item
