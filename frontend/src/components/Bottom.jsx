import React from 'react'
import { Link } from 'react-router-dom'

const Bottom = ({ label, lnktxt, linkto }) => {
  return (
   <>
     <p className='text-white'>{label}<Link to={linkto} className='underline text-lg text-blue-500'>{lnktxt}</Link> </p>
   </>
  )
}

export default Bottom