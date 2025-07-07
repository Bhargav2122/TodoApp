import React from 'react'

export const Input = ({email, password, onMailChange, onPassChange}) => {
  return (
    <>
      <input className='bg-slate-100 h-10 outline-none border-none rounded-md w-80 sm:w-80 w-full p-4' 
        type="text" 
        placeholder='Enter your Valid Email' 
        value={email} 
        onChange={onMailChange} 
        required />
      <input className='bg-slate-100 h-10 outline-none border-none rounded-md w-80 sm:w-80 w-full p-4' 
        type="password" 
        placeholder='Enter your password' 
        value={password} 
        onChange={onPassChange} 
        required />
    </>
  )
}