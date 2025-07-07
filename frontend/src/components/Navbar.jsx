import React, { useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { userAtom } from '../atoms/userAtom'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const user = useRecoilValue(userAtom)
  const setUser = useSetRecoilState(userAtom)
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    setUser(null)
    navigate('/login')
  }

  return (
    <>
      <nav className='w-screen h-[9vh] bg-neutral-900 text-gray-50 flex justify-between items-center px-8 tracking-widest text-lg font-head'>
        <div className='flex-shrink-0 text-2xl'>TodoApp</div>

       
        <div className='hidden sm:flex items-center space-x-6'>
          {user ? (
            <>
              <Link to='/todos' className='pr-9 text-xl'>TODOS</Link>
              <button className='text-xl' onClick={handleLogout}>LOGOUT</button>
            </>
          ) : (
            <Link to='/login' className='pr-9'>Login</Link>
          )}
        </div>

        
        <div className='sm:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className='w-6 h-6 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </nav>

    
      {isOpen && (
        <div className="absolute text-center top-[9vh] right-4 bg-neutral-900 border border-gray-600 rounded-xl px-6 py-4 flex flex-col items-end space-y-3 text-base z-50 shadow-lg sm:hidden">
          {user ? (
            <>
              <Link to="/todos" onClick={() => setIsOpen(false)  } className='text-white'>TODOS</Link>
              <button onClick={() => { handleLogout(); setIsOpen(false) }} className='text-white'>LOGOUT</button>
            </>
          ) : (
            <Link to="/login" onClick={() => setIsOpen(false)} className='text-white'>Login</Link>
          )}
        </div>
      )}
    </>
  )
}

export default Navbar
