import { useRecoilValue } from 'recoil'
import './App.css'
import { userAtom } from '../src/atoms/userAtom'
import {  BrowserRouter , Routes, Route } from 'react-router-dom'
import api from './axios/axois'
import Register from './pages/Register'

function App() {
  const user = useRecoilValue(userAtom)
 
  return (
    <>
      <BrowserRouter>
         <Routes>
          {user ? (
             <Route path='/' element={<TodoPage />} />
          ) : (
             <Route path = '/' element={<Register />} />
          )}

         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
