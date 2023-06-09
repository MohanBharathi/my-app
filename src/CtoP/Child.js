import React from 'react'

function Child({setName}) {
 const handleclick=()=>{
  setName('siva')
 }
  return (
    <div>
      <button onClick={handleclick}>click</button>

    </div>
  )
}

export default Child