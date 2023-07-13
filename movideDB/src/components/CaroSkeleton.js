

import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './Carousel.css'
function CaroSkeleton() {
    return (
    <div   className='container   p-4'>
    <div className='row justify-content-lg-between justify-content-center  align-items-center'>
      <div className="col-md-4 d-flex justify-content-center justify-content-lg-start">
      <Skeleton baseColor={'#F5F5F5 '} highlightColor='#424242  ' height={350} width={250}/>
      </div>

      <div className='col-md-8'>
       <p className='display-6 d-lg-block d-none'><Skeleton baseColor={'#F5F5F5 '} highlightColor='#424242' height={140}/></p>
        <p className=''><Skeleton baseColor={'#F5F5F5 '} highlightColor='#424242  ' count={3}/></p>
           
        </div>
      </div>
</div>)

}

export default CaroSkeleton
