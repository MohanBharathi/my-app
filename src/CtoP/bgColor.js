import { useState,useEffect } from "react";

const BgColor=()=>{
    const[color,setColor]=useState(false)

//  useEffect(()=>{
//         document.body.style.backgroundColor=color
//     })

    return(
           <div>
            {/* <button style={{backgroundColor:"red"}} onClick={()=>{setColor("red")}}>Red</button>
            <button style={{backgroundColor:"blue"}} onClick={()=>{setColor("blue")}}>Blue</button>
            <button style={{backgroundColor:"green"}} onClick={()=>{setColor("green")}}>Green</button>
            <button style={{backgroundColor:"black",color:"white"}} onClick={()=>{setColor("black")}}>Black</button> */}

             <button className="dark" onClick={()=>setColor(true)}>Dark Mode </button>
             <button className="light" onClick={()=>setColor(false)}>Light Mode</button>

           </div>
    )
}
export default BgColor;