import React from 'react'
import {useRecoilValue, useRecoilState } from 'recoil'
import {BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import { Todos } from './pages/Todos'
import { userAtom } from './atoms/userAtom'


const App = () => {

   const user = useRecoilValue(userAtom)

  return (
    <>
     <BrowserRouter>
       <Navbar />
       <Routes>
        <Route path='/' element = {<Navigate to='/register'/> } />
        <Route path='/register' element={ <Register />} />
        <Route path='/login' element={ <Login />} />

        {user && (
          <>
            <Route path='/todos' element={<Todos />} />
            <Route path='/profile' element={<Profile />} />
          </>
        )}
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App