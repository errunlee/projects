import React from 'react'
import { useContext } from 'react'
import { Appcontext } from '../context.js/Context'
import Item from './Item'
import Search from './Search'
function Allitems() {
  const {filteredData}=useContext(Appcontext)
  return (
   <>
   <Search/>
   <p className="display-6 text-center my-3 fw-bold">Cocktails</p>
   <div className="container my-5 ">
   <div className="row mx-auto">
    {
      filteredData.map((item)=>{
        return <div key={item.idDrink} className="col-lg-4"><Item  item={item}/>  </div>
      })
    }
   </div>
   </div>
  
   </>
  )
}

export default Allitems
