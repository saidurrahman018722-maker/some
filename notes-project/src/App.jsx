import { useState } from 'react'

const App = () => {

  const [n1, setn1] = useState('')
  const [n2, setn2] = useState('')

  const [obj, setobj] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    setobj(obj=>[
      ...obj,{n1,n2}
    ])

    setn1('')
    setn2('')
  }


  const deleteNote = (idx) => {
    const copyobj = [...obj];

    copyobj.splice(idx, 1)

    setobj(copyobj)
   
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>

      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>

        <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>

        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded '
          value={n1}
          onChange={(e) => {
            setn1(e.target.value)
          }}
        />
        <textarea
          type="text"
          className = 'px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none  rounded'
          placeholder = 'Write details here'
          value={n2}
          onChange={(e) => {
            setn2(e.target.value)
          }}
        />

        <button
          className='bg-white active:scale-95 font-medium w-full outline-none  text-black px-5 py-2 rounded'
        >
          Add Note
        </button>

      </form>
      <div className='lg:w-1/2 lg:border-l-2  p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
          {obj.map(function (elem, idx) {

            return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.n1}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.n2}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App