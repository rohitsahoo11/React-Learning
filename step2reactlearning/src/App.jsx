import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)    
  
  const changeValue = ()=>{
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    console.log("clicked", counter)
  } 
  const removeValue = ()=>{
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Hello World!</h1>
      <h2>Counter : {counter}</h2>

      <button onClick={changeValue}
      >Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
