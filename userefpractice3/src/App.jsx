import { useState, useEffect, useRef } from 'react'


function App() {
  const [inputValue, setInputValue] = useState("")
  const previousValue = useRef("")

  useEffect(()=>{
    previousValue.current = inputValue
  },[inputValue])

  return (
    <>
      <input type="text"
       value={inputValue}
       onChange={(e)=>setInputValue(e.target.value)} 
      />
      <h1>Current Value: {inputValue}</h1>
      <h2>Previous Value: {previousValue.current}</h2>
    </>
  )
}

export default App
