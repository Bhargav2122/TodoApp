import React from 'react'

const Button = ({btntext}) => {
  return (
    <>
      <button type='submit' className='w-full bg-slate-100 rounded-md h-10 text-lg font-medium'  >{btntext}</button>
    </>
  )
}

export default Button