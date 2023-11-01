import React from 'react'

const Button = (props) => {
  return (
    <button className='flex bg-red-400 p:[10px] text-white rounded-lg px-6 py-1.5'>
      {props.children}
    </button>
  )
}

export default Button