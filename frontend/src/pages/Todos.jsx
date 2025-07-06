import React from 'react'

export const Todos = () => {
  return (
    
     <section className='m-10 flex items-center justify-center'>
      <input placeholder='Enter your todo' className='w-56 mr-4 text-white bg-black rounded-[20px] h-10 p-4 text-sm ' />
      <button className='w-24 h-10 rounded-[20px] bg-black text-white text-center text-[1rem]'>Add</button>
     </section>  
    
  )
}
