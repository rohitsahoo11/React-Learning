import { useState, useCallback } from 'react'

const funcount = new Set()          
const App = () => {
 
 
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0)
 


  // without using usecallback hook
  // const increaseCount = ()=>{
  //   setCount(count + 1)
  // }
  // const decreaseCount = ()=>{
  //   setCount(count - 1)
  // }
  // const increaseNumber = ()=>{
  //   setNumber(number + 1)
  // }

  // with use callback hook
  const increaseCount = useCallback(() => {
    setCount(count + 1)
  }, [count])
  const decreaseCount = useCallback(() => {
    setCount(count - 1)
  }, [count])
  const increaseNumber = useCallback(() => {
    setNumber(number + 1)
  }, [number])  



  funcount.add(increaseCount);
funcount.add(decreaseCount);
funcount.add(increaseNumber);
alert(funcount.size);



  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={decreaseCount}>Decrease Count</button>
      <button onClick={increaseNumber}>Increase Number</button>     
    </>   // As the alert is increases by 3 every time then,
         // we will use callback hook to optimize the code,
         // then which dependency is changed then the callback will only call it.
  )
}

export default App
