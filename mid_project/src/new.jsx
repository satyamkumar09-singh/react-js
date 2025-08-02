import React, { useEffect, useRef, useState } from 'react'
import './app.css'

function App(){
  const[initialstate,finalstate]=useState(0);
  let val=useRef(0);
  const increment=()=>{
    val.current=val.current+1;
    finalstate(initialstate+1)
    console.log(val);
    let clr=current.clr(null).App

  }
  useEffect(()=>{
    console.log("main chal rha hu")
  })
  const changecolour=()=>{
    // eslint-disable-next-line no-undef
    clr.current.style.backgroundcolor="red";
  }

  return(
    <>
    <div>
      <h1>third project</h1>
      <h1>{initialstate}</h1>
      <h1>value={val.current}</h1>
      <button onClick={increment}>click</button>
      <button ref={increment}>change color</button>
      <button onclick={changecolour}>changecolour</button>
    </div>
    </>
    
  )
}



export default App