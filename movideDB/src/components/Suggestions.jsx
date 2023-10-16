import React, { useContext, useEffect, useRef, useState } from 'react'
import SingleMovie from './SingleMovie'
import Loading from './Loader'
import { MovieContext } from '../context'

import Skeletoncomp from './Skeleton';
import Slider from './Slider';
import Skeleton from 'react-loading-skeleton';



function Suggestions({ url }) {
  const [suggest, setSuggest] = useState('')
  const [nodata, setNodata] = useState(false)
  const request = async (suggestUrl) => {
    const res = await fetch(suggestUrl)
    const data = await res.json();
    setSuggest(data.results)
    if (data.length < 1) {
      setNodata(true)
    }
    else {
      setNodata(false)
    }
  }


  useEffect(() => {
    request(url);
  }, [url])


  return (
    <div className='my-2'>
      <div className="suggestions movie-wrapper" id="movie-grid-container">
        <Slider>
          {suggest.length > 0 ?

            suggest.map((movie) => {
              return <SingleMovie key={movie.id} movie={movie} />
            })
            :
            Array(7).fill(0).map((item, i) => {
              return <Skeletoncomp nodata={nodata}key={i} />
            })
          }
        </Slider>
      </div>
    </div>

  )
}

export default Suggestions
