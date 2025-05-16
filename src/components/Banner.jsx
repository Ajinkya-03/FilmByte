import React from 'react'


function Banner() {
  return (
    <div className='h-[50vh] bg-cover bg-center bg-no-repeat flex items-end' style={{backgroundImage: `url(https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/6720/1366720-i-c30300a11e8d)`}}>
      <div className='text-white w-full text-center bg-black p-1'>
        Avengers End Game
      </div>
    </div>
  )
}

export default Banner