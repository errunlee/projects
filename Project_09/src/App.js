import { useState } from 'react';
import './App.css';
import Generator from './Generator';
import Values from 'values.js';
function App() {
  const [value,setValue]=useState('#121212')
  const [list,setList]=useState([])
  const [error,setError]=useState(false)
  const handleClick=(e)=>{
    e.preventDefault();
    try {
      const colors=new Values(value).all(10)
      setList(colors)
      setError(false)
      console.log(list)
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }
  const handleChange=(e)=>{
    setValue(e.target.value)
  }
  return (
    <>
    <div className="wrapper">
      <form onSubmit={handleClick}>
      <header className='d-flex align-items-center my-3'>
        <p className='m-0 mx-4'>
        Color Generator
        </p>
        <input className={`${error?'border border-danger':'border-0'} p-2`} value={value} onChange={handleChange}/>
        <button type='submit' className="btn btn-primary rounded-0">Submit</button>
      <p className={`${error?'d-initial text-danger m-0 mx-2':'d-none'}`}>Invalid Color</p>
      </header>
      </form>
      <section className="">
      <Generator list={list} error={error}/>
      </section>
    </div>
    </>
  );
}

export default App;
