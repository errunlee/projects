import React, { useContext } from 'react'
import { Appcontext } from '../context.js/Context'

function Search() {
    const {data,setFilteredData}=useContext(Appcontext)
    const handleChange=(e)=>{
        const input=e.target.value;
        const newData=data.filter((item)=>{
            return item.strDrink.toLowerCase().includes(input)
        })
        if(input===''){
            setFilteredData(data)
        }
        else{
            setFilteredData(newData)
        }
    }
  return (
    <div>
       <div className='d-flex justify-content-center align-items-center my-5'>
      <div className="search-container w-sm-75 d-flex flex-column p-4 rounded shadow ">
        <p className='text-success fw-bolder'>Search Your Favorite Cocktail</p>
        <input onInput={(e)=>{handleChange(e)}}  className='border-0 p-2' type="text"/>
      </div>
    </div>
    </div>
  )
}

export default Search
