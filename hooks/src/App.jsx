import React, { use } from 'react'
import { useState } from 'react'
const App = () => {
  const [a, seta] = useState(1)
  const [str,setstr] =useState("")
  const [arr,setarr] =useState([])
  const [obj,setobj] =useState({
    name:"saif",
    age:20,
    lcation:"bangladesh",
    gender:"male"
  })
  const [num,setnum] =useState('');

  const run=(e)=>{
    e.preventDefault()
    console.log(num);
    
  }
  return (
    <>
    {/* <div>the number is ={a}</div>
    <button onClick={()=>{
     seta(a=>a+1);
     seta(a=>a+1);
     
    }}>Increment</button>
    <br />
    <input onChange={(e)=>{
      setstr(e.target.value);
    }} type="text" placeholder='Enter Your Name' />
    <p>Your name is {str}</p>

    <button onClick={()=>{
      seta(a=>a+1)
      setarr(arr=>[...arr,arr[a]=a])
    }}>Increment btn</button>

    <br />
    <button onClick={()=>{
      console.log(arr)
    }}>Click to see arr</button> */}
    {/* <div> the name is ={obj.name} <br /> the gender is = {obj.gender}</div>
    <button onClick={()=>{
      setobj(obj=>({...obj,name:"tania",gender:"female"}))
    }}>Click to see Changes</button> */}

    <form onSubmit={(e)=>{
      run(e);
    }}>
      <input
      value={num}
      onChange={(e)=>{
        console.log(setnum(e.target.value));
      }} 
      type="text"
      placeholder='Enter Your Name'/>
      <h1>{num}</h1>

    </form>



    </>
  )
}

export default App