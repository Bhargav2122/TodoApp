import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../components/Input'
import Heading from '../components/Heading'
import Button from '../components/Button'
import api from '../axios/axios'
import Bottom from '../components/Bottom'

const Register = () => {

    const[form, setForm] = useState({ fullname:'', email:'', password: ''  })
    const navigate = useNavigate()
      
    const handleSubmit =async (e) => {
      e.preventDefault()
      await api.post('/auth/register', form)
      navigate('/login')
    }

   
  return (
      <div className='bg-[#fff] h-[91vh] flex justify-center items-center px-4 sm:px-0'>    
        <form onSubmit={handleSubmit} className='bg-[#000] p-10 sm:p-10 p-6 rounded-xl grid grid-rows-4 gap-6 text-center w-full max-w-md sm:w-auto'>
          <Heading label = 'Create Your Account' />
          <input className='bg-slate-100 h-10 border-none outline-none rounded-md w-80 sm:w-80 w-full p-4'
           type="text" 
           placeholder='Enter your full name'
           value={form.fullname}
           onChange = {(e) => {
           setForm({...form, fullname :e.target.value})}} required />

          <Input email={form.email} password={form.password} onMailChange={(e) => setForm({...form, email:e.target.value})} onPassChange={(e) => setForm({...form, password:e.target.value})}  />
          <Button btntext='Register' />
          <Bottom label='Already have an account ? ' lnktxt='Login' linkto='/login'  />
        </form>
      </div>
  )
}

export default Register