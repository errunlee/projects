import { useState, useEffect } from 'react'
import Exp from './Exp'
export default function Tabs() {
  let response = []
  const [data, setData] = useState([])
  const [exp, setExp] = useState(null)
  const handleClick = (ord) => {
    let currExp = data.filter((item) => {
      return item.id === ord
    })
    setExp(currExp[0])
  }
  const fetchData = async () => {
    const url = 'https://course-api.com/react-tabs-project'
    const res = await fetch(url)
    response = await res.json();
    setData(response)
    setExp(response[0])
    console.log(data)
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <>
      <div className='box'>
        <div className='item d-flex flex-lg-column my-4'>
          {data.map((item, index) => {
            return <button key={index} onClick={() => { handleClick(item.id) }} className={`title ${exp.id === item.id ? 'current' : ''}`}>{item.company}</button>
          })}
        </div>
        <div className='item'>
          {exp != null && <Exp exp={exp} />}
        </div>
      </div>
    </>
  )
}