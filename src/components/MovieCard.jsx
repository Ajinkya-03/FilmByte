import React from 'react';
import { FaRegHeart, FaHeart  } from 'react-icons/fa';

function MovieCard({ poster_path, name, movieObj, watchList, toggleWatchList }) {
  const isInWatchlist = watchList.some((movie) => movie.id === movieObj.id);

  return (
    <div className="w-[200px] hover:scale-105 duration-300 hover:cursor-pointer">
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={name}
        className="h-[45vh] w-full object-cover rounded-xl mt-4"
      />

      <div
        onClick={() => toggleWatchList(movieObj)}
        className={`m-4 flex justify-center text-3xl transition-all p-2 rounded-full cursor-pointer 
          ${isInWatchlist
            ? 'text-red-600 hover:bg-red-100'
            : 'text-black hover:bg-green-100'
        }`}
        title={isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}>
        {isInWatchlist ? <FaHeart  /> : <FaRegHeart />}
      </div>

      <div className="mt-2 text-center bg-gray-200 text-black font-semibold border-b-2 border-gray-400 pb-1">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;

