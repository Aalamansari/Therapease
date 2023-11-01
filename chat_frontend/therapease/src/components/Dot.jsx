import React from 'react'

const Dot = ({ handleShowChat }) => {
  return (
    <div className='bg-primary fixed p-3 rounded-full bottom-5 right-5 text-white
     w-12 h-12 flex items-center justify-center text-sm font-medium cursor-pointer'
     onClick={handleShowChat}
     >Chat</div>
  )
}

export default Dot