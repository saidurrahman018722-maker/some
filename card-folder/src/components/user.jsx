import { LucideEqualApproximately } from 'lucide-react';
import React from 'react'

const user = (obj) => {
    // console.log(obj);
  return (
    <>
        <div style={{color:'white'}}>{obj.name} <span>the age is {obj.age}</span></div>
    </>
  )
}
export default user;