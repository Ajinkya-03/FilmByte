import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

function MovieCard({
  poster_path,
  name,
  handelAddToWatchList,
  handelRemoveToWatchList,
  movieObj,
  Watchlist = [],
}) {
  // Check if movie is already in the watchlist
  const isInWatchlist = Watchlist.some((movie) => movie.id === movieObj.id);

  // Toggle handler: add or remove based on presence
  const handleToggle = () => {
    if (isInWatchlist) {
      handelRemoveToWatchList(movieObj);
    } else {
      handelAddToWatchList(movieObj);
    }
  };

  return (
    <div className="w-[200px] hover:scale-105 duration-300 hover:cursor-pointer">
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={name}
        className="h-[45vh] w-full object-cover rounded-xl mt-4"
      />

      {/* Single Toggle Button */}
      <div
        onClick={handleToggle}
        className={`m-4 flex justify-center text-3xl transition-all p-2 rounded-full cursor-pointer ${
          isInWatchlist
            ? 'text-red-600 hover:bg-red-100'
            : 'text-green-600 hover:bg-green-100'
        }`}
        title={isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
      >
        {isInWatchlist ? <FaTimesCircle /> : <FaCheckCircle />}
      </div>

      <div className="mt-2 text-center bg-gray-200 text-black font-semibold border-b-2 border-gray-400 pb-1">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
