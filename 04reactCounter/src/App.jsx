import { useState } from 'react'
import './App.css'

function App() {
let [count,setCount] = useState(0)
 function addValue(){
  console.log("click")
  // let counter=count + 1
  // setCount(counter)
  if(count<20){
  setCount(count+1)
  }
 }

// most asking question in interview
// function addValue(){
  // setCount(count+1) //It send as a bunch of code to UI
  // setCount(count+1)
  // setCount(count+1)

  // setCount(prevcounter=>prevcounter+1) //It doest not send as bunch of code,It work as promise 
  // setCount(prevcounter=>prevcounter+1)
  // setCount(prevcounter=>prevcounter+1)
// }


 function removeValue(){
  if(count != "0" ){
  setCount(count-1)
  }
 }

  return (
    <>
      <section id="center">
        
        <div>
          <h1>No. of Count={count}</h1>
        </div>
 <button  className="counter" onClick={addValue}>Add Count: {count}</button>
 <button className="counter" onClick={removeValue}>Remove Count: {count}</button>
      </section>

    </>
  )
}

export default App
