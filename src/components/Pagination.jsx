import React from 'react'


function Pagination(handelPrev , handelNext , pageNo) {
  return (
    <div className='flex justify-center bg-gray-400 p-2 m-2'>
        
        <div onClick={handelPrev} className='px-5'>{/* ADD THE FRWOARD FONT AWSOME ICON  */} @- </div>
        <div className='font-bold'>{pageNo}</div>
        <div onClick={handelNext} className='px-5'>{/* ADD THE BACKWORD FONT AWSOME ICON  */} -@</div>
    </div>
  )
}

export default Pagination