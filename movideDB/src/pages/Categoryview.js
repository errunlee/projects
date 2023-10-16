import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleMovie from '../components/SingleMovie';
import Navbar from '../components/Navbar';
import InfiniteScroll from 'react-infinite-scroll-component';
import { MovieContext } from '../context';

const Loading=()=>{
  return (
<div className="text-center m-2" >
    <div class="spinner-border" role="status">
    </div>
  </div>
  )
}

const Categoryview = () => {
  const { type } = useParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading,setLoading]=useState(true)
  const {genresList}=useContext(MovieContext)
  const [genre,setGenre]=useState(null)

  useEffect(()=>{
    if(!genresList){
      return;
    }
    const selectedGenre=genresList.filter((item)=>{
      return item.id==type
    })
    console.log(selectedGenre)
    setGenre(selectedGenre[0].name)
  },[genresList,type])

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=c749165fc96671c286d19d7f046e41e5&with_genres=${type}&page=${page}`;

    const fetching = async () => {
    setLoading(true)

      const res = await fetch(url);
      const data = await res.json();
      setMovies((prevMovies) => [...prevMovies, ...data.results]);

    };

    fetching();
    setLoading(false)

  }, [page]);

  useEffect(() => {
    setMovies([])
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=c749165fc96671c286d19d7f046e41e5&with_genres=${type}&page=${page}`;

    const fetching = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
    };

    fetching();
  }, [ type]);

  const fetchNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
if(!movies){
    return;
}
  return (
    <div>
      <Navbar />
      <div className=' container-fluid-xl container-md overflow-hidden'>
      <span className='badge bg-secondary lead p-3 m-2 rounded-0 fw-lighter'>Top results for <span className='fw-bolder text-warning h6 m-0'>{genre}</span></span>
        
          <InfiniteScroll
            dataLength={movies.length}
            next={fetchNextPage}
            hasMore={true}
            loader={!loading?<Loading/>:null}
            endMessage={
              <p style={{ textAlign: 'center',overflow:'hidden' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
        <div className='row'>

            {movies.length > 0 &&
              movies.map((movie,index) => (
                <div key={index} className='col-lg-2 col-md-3 col-4'>
                  <SingleMovie movie={movie} />
                </div>
              ))}
        </div>

          </InfiniteScroll>
      </div>
    </div>
  );
};

export default Categoryview;
