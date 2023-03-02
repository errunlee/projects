import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Appcontext } from '../context.js/Context'
function Info() {
    const {id}=useContext(Appcontext)
    const {data}=useContext(Appcontext)
    const showingData=data.filter((item)=>{
        return item.idDrink===id;
    })[0]
    console.log(showingData)
  return (
    <>
    <div className="d-flex align-items-center flex-column my-4">
    <Link to='/' className='btn btn-success rounded-0 '>Go back</Link>
        <h2 className='display-6 mt-3' >{showingData.strDrink}</h2>
    </div>
    
    <div className="container row my-5 mx-auto">
        <div className='col-5'>
            <img style={{width:'300px',height:'350px'}}src={showingData.strDrinkThumb}/>
        </div>
     <div className=' d-flex flex-column justify-content-center align-items-start col-7'>
        <p>Name:<span>{showingData.strDrink}</span></p>
        <p>Category:<span>{showingData.strCategory}</span></p>
        <p>Info:<span>{showingData.strAlcoholic}</span></p>
        <p>Glass:<span>{showingData.strGlass}</span></p>
        <p>Instructions:<span>{showingData.strInstructions}</span></p>
        <p>Ingredients:<span>{showingData.strInstructionsIT}</span></p>
    </div>
    </div>
   </>
  )
}

export default Info
