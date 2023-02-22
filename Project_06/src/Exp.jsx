
export default function Exp({exp}){
  const {company,duties,dates,title}=exp
  return(
    <>
    <div className='infos'>
    <p>{title}</p>
    <p className='my-2'>{company}</p>
    <p className='my-3'>{dates}</p>
    </div>
    
    <div className='roles'>
      {duties.map((item,index)=>{
      return <div className='d-flex' key={index}><li></li><p>{item}</p></div>
      })}
    </div>
    </>
  )
}