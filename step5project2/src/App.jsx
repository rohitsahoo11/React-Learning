import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [Password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const generatePassword = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIKLMNOPQRSTVXYZabcdefghijklmnopqrstuvwxyz"

    if(number) str += "0123456789"
    if(character) str += "!@#$%^&*_-"

    for(let i=1; i<= length; i++){
      let char = Math.floor(Math.random() * str.length+1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, number, character, setPassword])

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.select(0,100)
    window.navigator.clipboard.writeText(Password),[Password]
  })

  useEffect(()=>{generatePassword()},[length, character, number, generatePassword])
  
  return (
    <>
      <div className='w-full max-w-md mx-auto my-8 px-4 py-3 shadow-md rounded-lg text-orange-400 bg-gray-700'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={Password}
          placeholder='Password'
          readOnly
          className='outline-none py-1 px-3 w-full'
          ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white px-4 py-2 shrink-0'
          onClick={copyToClipboard}
          >copy</button>
        </div>
        
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
             type="range"
             min={6}
             max={100}
             className='cursor-pointer'
             value={length}
             onChange={(e)=>{setLength(e.target.value)}}
            />
             <label>Length: {length}</label>
          </div>
          
          <div  className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            value={number}
            id='numberInput'
            onChange={()=>{
              setNumber((prev) => !prev)
            }}
          />
          <label htmlFor='numberInput'>Number</label>
          </div>
          
          <div  className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            value={character}
            id='characterInput'
            onChange={()=>{
              setCharacter((prev) => !prev)
            }}
          />
          <label htmlFor='characterInput'>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
