import React from 'react'

const App = () => {
  return (
   
    <div className="bg-black min-h-screen lg:flex text-white">
      <form className='flex flex-col gap-4 p-10 lg:w-1/2 items-start'>
        <h1 className='text-4xl font-bold'>Add Notes</h1>
        <input type="text" 
        className='font-medium w-full border-2 outline-none px-4 py-2 rounded' 
        placeholder='Enter Heading' />
        <textarea type="text"
        className=' flex flex-row font-medium w-full border-2 outline-none px-4 py-2 rounded h-40 items-start' 
        placeholder='Enter Your Note'></textarea>
        <button className='bg-white text-black px-4 py-2 font-medium rounded w-full items-center'>Submit</button>
      </form>
        <div className='lg:border-l-2 lg:w-1/2 p-10'>
          <h1 className='text-4xl font-bold'>Recent Notes</h1>
          
          <div className='flex gap-4 flex-wrap overflow-auto mt-5'>
              <div className='bg-white h-40 w-32 rounded-2xl'></div>
              <div className='bg-white h-40 w-32 rounded-2xl'></div>
          </div>
        </div>
    </div>
    
  )
}

export default App