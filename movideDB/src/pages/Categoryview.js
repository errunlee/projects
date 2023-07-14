import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleMovie from '../components/SingleMovie';
import Navbar from '../components/Navbar';
import InfiniteScroll from 'react-infinite-scroll-component';

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
      <span className='badge bg-primary p-3 m-2 rounded-0'>Top results</span>
      <div className='container-md overflow-hidden'>
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
                <div key={index} className='col-lg-2 col-md-4 col-6'>
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
