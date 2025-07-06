import React from 'react'
import { useRecoilValue } from 'recoil'
import { userAtom } from '../atoms/userAtom'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const user = useRecoilValue(userAtom)

  return (
    
      <nav className='w-screen h-[9vh] bg-neutral-900 text-gray-50 flex justify-between items-center px-8 text-lg font-quick'>
        <div className='flex-shrink-0'>TodoApp</div>
        <div className='flex items-center space-x-6'>
            {
                user ? (
                    <>
                     <Link to='/todos' className='pr-9'>Mytodos</Link>
                     <button>Logout</button>
                    </>
                ) : (
                     <Link to='/login'  className='pr-9'>Login</Link>
                )
            }
        </div>
      </nav>
  
  )
}

export default Navbar