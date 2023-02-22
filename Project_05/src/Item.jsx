export default function Item({title,desc,img,price}){
  return(
    <>
    <div className='item d-flex justify-content-center my-3'>
    <div className='mx-3'>
      <img src={img}/>
    </div>
      <div>
        <div className="d-flex justify-content-between title mb-2">
        <p className='mb-0'>{title.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')}</p><p className='mb-0 price'>${price}</p>
        </div>
        <p className="desc">{desc}</p>
      </div>
    </div>
    </>
  )
}