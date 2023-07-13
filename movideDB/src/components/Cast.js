import React from 'react'
import '../pages/MovieDetail'
import { LazyLoadImage } from 'react-lazy-load-image-component';


function Cast({ cast }) {
  return (
    <div>
      <div className="cast">
        {
          cast && cast.map((item) => {
            const { original_name, profile_path, character } = item;
            const imageUrl = profile_path ? `https://image.tmdb.org/t/p/w200${profile_path}` : 'https://picsum.photos/200/300'

            return <div className="cast-profile m-2 text-center rounded">

              <LazyLoadImage
                alt={'cast-avatar'}
                height={200}
                src={imageUrl} // use normal <img> attributes as props
                width={120}
                effect="blur" />


              <div className="d-flex flex-column align-items-center">
                <p className='lead m-0'>{original_name}</p>
                <p className='m-0 text-secondary character'>{character}</p>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Cast
