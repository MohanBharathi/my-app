import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    const[name,setName]=useState("mohan")
  return (
    <div>
      {name}<Child name={name} setName={setName}/></div>
  )
}

export default Parent