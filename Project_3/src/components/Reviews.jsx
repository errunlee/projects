import { useState ,useEffect} from 'react'
import data from './data'
export default function Reviews() {
  
  let [index,setIndex]=useState(0)
  let [person,setPerson]=useState(data[index])
  let {name,job,text,image}=person;
  const handleNext=()=>{
    if(index<3){
      setIndex(index+1)
    }
    else{
    setIndex(0)
    }   
  }
  const handlePrevious=()=>{
    if(index>0){
      setIndex(index-1)
    }
    else{
    setIndex(3)
    }   
  }
  const handleSurprise=()=>{
    let random=Math.floor(Math.random()*4)
    while(random===index){
     random=Math.floor(Math.random()*4)
    }
    setIndex(random)
  }
  useEffect(()=>{
    setPerson(data[index])
  },[index])
  return (
    <div className='box shadow d-flex flex-column align-items-center p-3'>
      <div className='img-container mb-2'>
        <div className="img-bg position-relative">
        </div>
      <img src={image} alt='pic'/>
      </div>    

      <p className='m-0 mt-3 name'>{name.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")}</p>
      <p className='m-1 text-primary'>{job.toUpperCase()}</p>
      <p className='text-center text-secondary'>{text}</p>

      <div className='arrow-btns'>
      <button onClick={handlePrevious} className='btn mx-1 k bg-none'>Previous</button>
      <button onClick={handleNext} className='btn mx-1  bg-none'>Next    </button>
      </div>
      <button onClick={handleSurprise} className='btn border-info mt-2'>Surprise Me</button>
    </div>
  )
}