import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../components/Input'
const Register = () => {
  return (
    <>
      <div className=' w-full bg-[#fff]  h-[91vh] flex justify-center items-center'>
        <form className='bg-[#000] p-10 rounded-xl grid grid-rows-4 gap-6 text-center '>
          <input className=' bg-slate-100 h-10 border-none outline-none rounded-md  w-80 p-4 ' type="text" name="" placeholder='Enter your full name'/>
          <Input />
          <button className='w-full bg-slate-100 rounded-md'  >Register</button>
          <p className='text-white'>Already have an account ?   <Link to='/login' className='underline text-lg text-blue-500'>login</Link> </p>
        </form>
      </div>
    </>
  )
}

export default Register