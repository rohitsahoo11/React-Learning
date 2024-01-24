import { useRef} from 'react'


function App() {
  const inputElement = useRef()
  const focusElement = ()=>{
    inputElement.current.focus()
  }

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusElement}>Focus</button>
    </>
  )
}

export default App
