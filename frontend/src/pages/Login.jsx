import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../components/Input'
import Heading from '../components/Heading'
import Button from '../components/Button'
import Bottom from '../components/Bottom'
import api from '../axios/axios'
import { useSetRecoilState } from 'recoil'
import { userAtom } from '../atoms/userAtom'

const Login = () => {
  const[form, setForm] = useState({email: '', password:''})
  const navigate = useNavigate()
  const Setuser = useSetRecoilState(userAtom)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await api.post('/auth/login', form)
     Setuser(res.data.user)
     localStorage.setItem('user', JSON.stringify(res.data.user))
     localStorage.setItem('token', res.data.token)
     navigate('/todos')
  }


  return (
    <>
      <div className='bg-[#fff]  h-[91vh] flex justify-center items-center'>
        <form onSubmit={handleSubmit} className='bg-[#000] p-10 rounded-xl grid grid-rows-4 gap-6 text-center '>
          <Heading label='Login to your account' />
           <Input email={form.email} password={form.password} onMailChange={(e) => setForm({...form, email:e.target.value})} onPassChange={(e) => setForm({...form, password:e.target.value})}  />
          <Button btntext='Login' />
          <Bottom label='Do not have account ? ' lnktxt='Register' linkto='/register'  />
        </form>
      </div>
    </>
  )
}

export default Login