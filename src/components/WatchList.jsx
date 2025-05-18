import React, { useState } from 'react'
import { AiFillDelete } from "react-icons/ai";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";

function WatchList({watchList , setWatchList}) {

  const [search , setSearch ] = useState('')

  let handleSearch = (e)=>{
      setSearch(e.target.value)
  }

  let sortIncreasing= ()=>{
     let sortedIncreasing = watchList.sort((movieA , movieB)=>{
        return movieA.vote_average - movieB.vote_average
      })
      setWatchList([...sortedIncreasing])
  }
  let sortDecreasing= ()=>{
    let sortedDecreasing = watchList.sort((movieA , movieB)=>{
        return movieB.vote_average - movieA.vote_average
      })
    watchList([...sortedDecreasing])
  }

  return (
    <>

      <div className='flex justify-center flex-wrap'>
        <div className=' flex justify-center bg-red-700 text-white font-bold h-[3rem] w-[6rem] rounded-xl items-center mx-4 '>Action</div>
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
                <div onClick={sortDecreasing} className='p-2'><FaArrowAltCircleDown /></div>
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
                <td> Action</td>

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