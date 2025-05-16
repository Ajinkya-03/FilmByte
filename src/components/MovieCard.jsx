import React from 'react'

function MovieCard({ poster_path, name }) {
  return (
    <div className="w-[200px] hover:scale-105 duration-300 hover:cursor-pointer">
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={name}
        className="h-[47vh] w-full object-cover rounded-xl mt-4.5 "
      />
      <div className="mt-2 text-center bg-gray-200 text-black font-semibold border-b-2 border-gray-400 pb-1">
        {name}
      </div>
    </div>
  )
}

export default MovieCard
