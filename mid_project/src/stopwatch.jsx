import { useState,useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [time,setTime]=useState(0);
  let timeref=useRef(null);
  const startwatch=()=>{
    timeref.current=setInterval(() => {
      setTime(time=>time+1);
    }, 1000);
  }
  const stopwatch=()=>{
    clearInterval(timeref.current);
   
  }

  return (
    <>
      <div>
       <h1>{time}</h1>
       <button onClick={startwatch}>start</button>
       <button onClick={stopwatch}>stop</button>
       <button>reset</button>
        
          
      </div>
    </>
  )
}

export default App