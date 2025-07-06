import React from 'react'
import {useRecoilValue, useRecoilState } from 'recoil'
import {BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Login from './pages/Login'
import { Todos } from './pages/Todos'
import { userAtom } from './atoms/userAtom'
import './App.css'


const App = () => {

   const user = useRecoilValue(userAtom)

  return (

     <BrowserRouter>
     <div className='w-full min-h-screen overflow-x-hidden'>
       <Navbar />
       <main className='w-full max-w-full'>
       <Routes>
        <Route path='/' element = {<Navigate to='/register'/> } />
        <Route path='/register' element={ <Register />} />
        <Route path='/login' element={ <Login />} />

        {user && (
          <>
            <Route path='/todos' element={<Todos />} />
          </>
        )}
       </Routes>
        </main>
       </div>
     </BrowserRouter>

  )
}

export default App