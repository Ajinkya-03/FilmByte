import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Pagination({handelPrev , handelNext , pageNo}) {
  return (
    <div className='flex justify-center bg-gray-400 p-2 m-2'>
        
        <div onClick={handelPrev} className='px-5'><FaArrowLeft size={24} style={{ cursor: 'pointer', color: 'gray' }} /></div>
        <div className='font-bold'>{pageNo}</div>
        <div onClick={handelNext} className='px-5'><FaArrowRight size={24} style={{ cursor: 'pointer', color: 'gray' }} /></div>
    </div>
  )
}

export default Pagination