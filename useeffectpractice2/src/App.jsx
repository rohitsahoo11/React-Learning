import { useState, useEffect } from 'react'



function App() {
  const [count, setCount] = useState(0)
  const [calculate, setCalculate] = useState(0)

  useEffect(()=>{
    setCalculate(()=>count*2)
  },[count])
  
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount((c)=>c+1)} >+</button>
      <h2>Calculation: {calculate}</h2>
    </>
    
  )
}

export default App
