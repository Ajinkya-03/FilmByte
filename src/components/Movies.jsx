import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination'

function Movies() {

  const [movies, setMovies] = useState([])
  const [pageNo, setpageNo] = useState(1)

  const handelPrev = () =>{
    if(pageNo === 1 ){
      setpageNo(pageNo)
    }
    else{
      setpageNo(pageNo-1)
    }
    
  }

  const handelNext = () =>{
    setpageNo(pageNo+1)
  }

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2bdc99d85c9afb7553a8303b57f438d7&language=en-US&page=${pageNo}`).then(function(res){
      setMovies(res.data.results)
    })
  },[pageNo])


  return (
    <div className='p-5'>
      <div className='text-2xl m-5 font-bold text-center '>
        Trending Movies 👇
      </div>

      <div className='flex flex-row flex-wrap justify-around m-5 '>
        
        {movies.map((movieObj)=>{
          return <MovieCard poster_path={movieObj.poster_path} name={movieObj.original_title}/>
        })}
      </div>

      <Pagination handelNext={handelNext} handelPrev={handelPrev} pageNo={pageNo} />

    </div>
  )
}

export default Movies