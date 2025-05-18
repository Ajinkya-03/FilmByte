import './App.css';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import WatchList from './components/WatchList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [watchList, setWatchList] = useState(()=>{
    const saved = localStorage.getItem('watchList');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify(watchList));
  }, []);

 const toggleWatchList = (movieObj) => {
    setWatchList((prevList) => {
      const exists = prevList.some((movie) => movie.id === movieObj.id);

      if (exists) {
        const updated = prevList.filter((movie) => movie.id !== movieObj.id);
        console.log('❌ Removed:', movieObj.title || movieObj.name);
        return updated;
      } else {
        const updated = [...prevList, movieObj];
        console.log('✅ Added:', movieObj.title || movieObj.name);
        return updated
      }
    });
  };

  return (
   <BrowserRouter>
  <Navbar />
  <Routes>
    <Route
      path="/"
      element={
        <>
          <Banner />
          <Movies watchList={watchList} toggleWatchList={toggleWatchList} // ✅ pass toggle to Movies
          />
        </>
      }
    />
    <Route path="/watchlist" element={<WatchList watchList={watchList} setWatchList={setWatchList} />}
    />
  </Routes>
</BrowserRouter>
  );
}

export default App;


// function App() {
//   const [watchList, setWatchList] = useState([]);

  // const toggleWatchList = (movieObj) => {
  //   setWatchList((prevList) => {
  //     const exists = prevList.some((movie) => movie.id === movieObj.id);

  //     if (exists) {
  //       const updated = prevList.filter((movie) => movie.id !== movieObj.id);
  //       console.log('❌ Removed:', movieObj.title || movieObj.name);
  //       return updated;
  //     } else {
  //       const updated = [...prevList, movieObj];
  //       console.log('✅ Added:', movieObj.title || movieObj.name);
  //       return updated;
  //     }
  //   });
  // };


//   return (
//     <return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Banner />
//               <Movies
//                 watchList={watchList}
//                 toggleWatchList={toggleWatchList}
//               />
//             </>
//           }
//         />
//         <Route
//           path="/watchlist"
//           element={
//             <WatchList
//               watchList={watchList}
//               toggleWatchList={toggleWatchList}
//             />
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;