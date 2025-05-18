import React, { useEffect, useState } from 'react'
import { AiFillDelete } from "react-icons/ai";
import { FaArrowAltCircleUp } from "react-icons/fa";
import genreids from '../assets/genre.js'

function WatchList({watchList , setWatchList}) {

  const [search , setSearch ] = useState('')
  const [genreList , setGenreList] = useState(['All Genres'])

  let handleSearch = (e)=>{
      setSearch(e.target.value)
  }

  let sortIncreasing= ()=>{
     let sortedIncreasing = watchList.sort((movieA , movieB)=>{
        return movieA.vote_average - movieB.vote_average
      })
      setWatchList([...sortedIncreasing])
  }


  useEffect(()=>{
    let temp = watchList.map((movieObj)=>{
      return genreids[movieObj.genre_ids[0]]
    })
    setGenreList(['All Genres' , ...temp])
    console.log(temp)
  },[watchList])

  return (
    <>

      <div className='flex justify-center flex-wrap'>
        {genreList.map((genre)=>{
           return <div className=' flex justify-center bg-red-700 text-white font-bold h-[3rem] w-[6rem] rounded-xl items-center mx-4 '>
            {genre}</div>
        })}
        
        <div className=' flex justify-center bg-gray-500 text-white font-bold h-[3rem] w-[6rem] rounded-xl items-center '>Action</div>
      </div>


    <div className='flex justify-center my-4 '>
      <input onChange={handleSearch} value={search} className='h-[3rem] w-[20rem] bg-gray-300 p-3 border-none' type="text" placeholder='Search Here...'/>
    </div>


    <div className='rounded-lg overflow-hidden border border-black m-8'>
      <table className='w-full text-black text-center'>
        <thead className='border-b-9 '>
            <tr>
              <th>Name</th>
              
              
              <th className='flex justify-center'>
                <div onClick={sortIncreasing} className='p-2'><FaArrowAltCircleUp /></div>
                <div className='p-1'>Rating</div>
              </th>

              
              <th>Popularity</th>
              <th>Genere</th>
            </tr>

        </thead>

        <tbody>

          {watchList.filter((movieObj)=>{
            return movieObj.title.toLowerCase().includes(search.toLowerCase())
          }).map((movieObj)=>{
            return  <tr className='border '>
                <td className='flex items-center py-4 px-6'>
                  <img className='h-[9rem] w-[9rem] ' src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}/>
                  <div className='mx-5'>{movieObj.title}</div>
                </td>

                <td> {movieObj.vote_average}</td>
                <td> {movieObj.popularity}</td>
                <td> {genreids[movieObj.genre_ids[0]]}</td>

                <td className='text-red-600 text-3xl cursor-pointer '><AiFillDelete /></td>
              </tr>
          })}

            

        
        </tbody>
      </table>
    </div>

    </>
  )
}

export default WatchList