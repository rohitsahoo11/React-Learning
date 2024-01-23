// use setTimeout() to count 1 sec after initial render.
import { useState, useEffect } from 'react'



function App() {
  const [count, setCount] = useState(0)

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setCount((count)=> count + 1)

  //   },1000)  // useEffect without the dependency
  // })  

  // It runs on every renders.
  // so to fix this we need to at least put an empty array, if needed we can give the dependencies in the array.
  
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count+1);
    }, 1000);
  }, []);  // giving an empty array.
  return <h1>I'v rendered {count} times!</h1>
  
}

export default App
