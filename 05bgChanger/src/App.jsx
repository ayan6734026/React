import { useState } from "react"

function App() {
  let [color,setColor]=useState("white");

  return (
    <div className="m-0 p-0 w-full h-screen flex justify-center items-end pb-10" style={{backgroundColor:color}}>
      <div className="h-12 w-auto bg-amber-200 flex items-center px-4 rounded-xl space-x-3">

        <button onClick={()=>setColor("white")} className="h-8 w-15 bg-white shadow-lg rounded-2xl font-semibold outline-none"  >
          White
        </button>

        <button onClick={()=>setColor("red")} className="h-8 w-15 bg-red-500 shadow-lg rounded-2xl font-semibold outline-none" >
          Red
        </button>

        <button onClick={()=>setColor("green")} className="h-8 w-15 bg-green-500 shadow-lg rounded-2xl font-semibold outline-none" >
          Green
        </button>

        <button onClick={()=>setColor("olive")} className="h-8 w-15 bg-olive-500 shadow-lg rounded-2xl font-semibold outline-none" >
          Olive
        </button>

        <button onClick={()=>setColor("gray")} className="h-8 w-15 bg-gray-500 shadow-lg rounded-2xl font-semibold outline-none" >
          Gray
        </button>

        <button onClick={()=>setColor("yellow")} className="h-8 w-15 bg-yellow-500 shadow-lg rounded-2xl font-semibold outline-none" >
          Yellow
        </button>
      </div>      
    </div>
  )
}

export default App
