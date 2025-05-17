import './App.css';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import WatchList from './components/WatchList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [watchList, setWatchList] = useState([]);

  const handelAddToWatchList = (movieObj) => {
    const alreadyInList = watchList.some((movie) => movie.id === movieObj.id);
    if (!alreadyInList) {
      setWatchList([...watchList, movieObj]);
    }
  };

  const handelRemoveToWatchList = (movieObj) => {
    const filterWatchlist = watchList.filter((movie) => movie.id !== movieObj.id);
    setWatchList(filterWatchlist);
  };

  useEffect(() => {
    console.log("Updated WatchList:", watchList);
  }, [watchList]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  watchList={watchList}
                  handelAddToWatchList={handelAddToWatchList}
                  handelRemoveToWatchList={handelRemoveToWatchList}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <WatchList
                watchList={watchList}
                handelRemoveToWatchList={handelRemoveToWatchList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
