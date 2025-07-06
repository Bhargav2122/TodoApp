import React from 'react'

export const Input = ({email, password, onMailChange, onPassChange}) => {
  return (
    <>
      <input className=' h-10 outline-none border-none  rounded-md  w-80 p-4 ' type="text"  placeholder='Enter your Valid Email' value={email} onChange={onMailChange}  />
      <input className='  h-10 outline-none border-none  rounded-md  w-80 p-4 ' type="password" placeholder='Enter your password' value={password} onChange={onPassChange}/>
    </>
  )
}
