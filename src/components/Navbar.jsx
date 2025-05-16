import React, { useState, useEffect } from 'react';
import Logo from '../Logo.gif'

import { Link } from 'react-router-dom'

function Navbar() {
  

  return (
  <div className="flex items-center justify-between px-6 py-4 bg-white shadow">
    <div className="flex items-center space-x-2">
        <img src={Logo} alt="Logo" className="w-11" />
        <h1 className="text-2xl font-bold text-black">FLIMBYTE</h1>
    </div>

    <nav className="flex space-x-6">
        <Link to="/" className="text-xl font-bold text-red-700 hover:text-red-900 hover:underline">Movies</Link>
        <Link to="/watchlist" className="text-xl font-bold text-red-700 hover:text-red-900 hover:underline">WatchList</Link>

    </nav>
  </div>
    )
}

export default Navbar