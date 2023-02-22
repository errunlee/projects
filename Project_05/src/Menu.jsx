import Item from './Item'
import data from './data'
import Options from './Options'
import { useState } from 'react'
export default function Menu(){
  const [items,setItems]=useState(data)
  return(
    <>
      <div className='d-flex justify-content-center m-3'>
      <Options items={items} setItems={setItems}/>
      </div>
    <div className='menu-div'>
      {items.map((dish)=>{
  const {id, title,img,desc,price}=dish
      return <Item key={id} title={title} img={img} desc={desc} data={data} price={price}/>
      })}
    </div>
      </>
  )
}