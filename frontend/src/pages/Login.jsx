import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../components/Input'

const Login = () => {
  return (
    <>
      <div className=' w-full bg-[#fff]  h-[91vh] flex justify-center items-center'>
        <form className='bg-[#000] p-10 rounded-xl grid grid-rows-4 gap-6 text-center '>
          <Input />
          <button className='w-full bg-slate-100 rounded-md'  >Login</button>
          <p className='text-white'>Do not have an account ?   <Link to='/register' className='underline text-lg text-blue-500'>Register</Link> </p>
        </form>
      </div>
    </>
  )
}

export default Login