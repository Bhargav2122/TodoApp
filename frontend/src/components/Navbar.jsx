import React from 'react'
import { useRecoilValue } from 'recoil'
import { userAtom } from '../atoms/userAtom'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const user = useRecoilValue(userAtom)

  return (
    <> 
      <nav className='w-full h-[9vh] tracking-wider bg-neutral-900 text-gray-50 flex justify-between items-center text-lg font-quick  '>
        <div className='p-9'>TodoApp</div>
        <div className='mr-11'>
            {
                user ? (
                    <>
                     <Link to='/todos' className='pr-9'>Mytodos</Link>
                     <Link to='/profile'  className='pr-9'>Profile</Link>
                     <button>Logout</button>
                    </>
                ) : (
                     <Link to='/login'  className='pr-9'>Login</Link>
                )
            }
        </div>
      </nav>
    </>
  )
}

export default Navbar