import React from 'react'
import { AiFillDelete } from "react-icons/ai";

function WatchList({watchList}) {
  return (
    <>

      <div className='flex justify-center flex-wrap'>
        <div className=' flex justify-center bg-red-700 text-white font-bold h-[3rem] w-[6rem] rounded-xl items-center mx-4 '>Action</div>
        <div className=' flex justify-center bg-gray-500 text-white font-bold h-[3rem] w-[6rem] rounded-xl items-center '>Action</div>
      </div>


    <div className='flex justify-center my-4 '>
      <input className='h-[3rem] w-[20rem] bg-gray-300 p-3 border-none' type="text" placeholder='Search Here...'/>
    </div>

    <div className='rounded-lg overflow-hidden border border-black m-8'>
      <table className='w-full text-black text-center'>
        <thead className='border-b-9 '>
            <tr>
              <th>Name</th>
              <th>Rating</th>
              <th>Popularity</th>
              <th>Genere</th>
            </tr>

        </thead>

        <tbody>

          {watchList.map((movieObj)=>{
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