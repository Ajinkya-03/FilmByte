import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination'


function Movies({ watchList, toggleWatchList }) {

  const [Movies, setMovies] = useState([])
  const [pageNo, setPageNo] = useState(1)

  const handlePrev = () =>{
    if(pageNo==1){
      setPageNo(1)
    }
      setPageNo(pageNo-1)
  }
  const handleNext = () => {
      setPageNo(pageNo+1)
  }

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2bdc99d85c9afb7553a8303b57f438d7&page=${pageNo}`).then(function(res){
      console.log(res.data.results)
      setMovies(res.data.results)});
  }, [pageNo])

  

  return (

    <div className='p-5'>
      <div className='text-2xl m-5 font-bold text-center '>
        Trending Movies 👇
      </div>

    <div className="flex flex-wrap justify-center gap-4">
        {Movies.map((movie) => (
          <MovieCard
            key={movie.id}
            poster_path={movie.poster_path}
            name={movie.title}
            movieObj={movie}
            watchList={watchList}
            toggleWatchList={toggleWatchList}
          />
        ))}
      </div>

      
      <Pagination handlePrev={handlePrev} handleNext={handleNext} pageNo={pageNo} />
    </div>
  );
}

export default Movies;