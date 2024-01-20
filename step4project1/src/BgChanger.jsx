import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 px-3 py-2 rounded-3xl bg-white">
            <button onClick={()=>setColor("red")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor: "red"}}>Red</button>
            <button onClick={()=>setColor("orange")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor: "orange"}}>Orange</button>
            <button onClick={()=>setColor("black")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor: "black"}}>Black</button>
            <button onClick={()=>setColor("white")}
             className="outline-none px-4 py-1 rounded-full text-black shadow-lg " style={{backgroundColor: "White"}}>White</button>
            <button onClick={()=>setColor("skyblue")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor: "skyblue"}}>Sky Blue</button>
            <button onClick={()=>setColor("purple")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor: "purple"}}>Purple</button>
            <button onClick={()=>setColor("lightgreen")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor: "lightgreen"}}>Green</button>
            <button onClick={()=>setColor("pink")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor: "pink"}}>Pink</button>
            <button onClick={()=>setColor("indigo")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor: "indigo"}}>Indigo</button>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
