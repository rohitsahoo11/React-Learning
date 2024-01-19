import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <h1 className='bg-black text-white p-5 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="Rohit" btnText="Click me" />
      <Card username="Sahoo"  />  


    </>
  )
}

export default App
