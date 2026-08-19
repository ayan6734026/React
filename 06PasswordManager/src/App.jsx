import { useCallback, useState, useEffect,useRef } from 'react'

function App() {
  const [password, setPassword] = useState("")
  const [length,setLength] =useState(4)
  const [numbersAllowed,SetNumberAllowed] = useState(false)
  const [charactersAllowed,setcharactersAllowed] = useState(false)

  const copy=useRef(null);

  const copytoClipboard=useCallback(()=>{
    copy.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  const CreatePassword = useCallback(()=>{
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass="";

    if(charactersAllowed){
      str+="!@#$%^&*()-_=+[]{}\|;:,<.>/?~";
    }
    if(numbersAllowed){
      str+="0123456789";
    }

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length + 1)
      pass+=str.charAt(char)
      setPassword(pass)
    }



  },[length,numbersAllowed,charactersAllowed,setPassword]);

  useEffect(()=>{
    CreatePassword()
  },[length,numbersAllowed,charactersAllowed,CreatePassword]);


  return (
    <>
    <div className='m-0 p-0 h-screen flex flex-col justify-center items-center'>
      <h1 className='text-white font-semibold text-3xl mb-10 underline underline-offset-8 decoration-wavy'>Password Generator</h1>

      <div className='h-40 w-100 bg-cyan-900 rounded-2xl flex flex-col p-5 space-y-5'>
        <div className='h-auto w-full flex flex-row justify-evenly'>
        <input type='text'
        value={password}
        ref={copy}
        readOnly
        className='h-auto w-65 outline-none shadow-lg rounded-md bg-cyan-200 font-medium px-2'></input>

        <button className='h-auto w-15 bg-amber-200 shadow-lg rounded-2xl font-semibold flex justify-center items-center' 
        onClick={copytoClipboard}
        >
          Copy
        </button>
        </div>

        <div className='flex flex-col space-y-5'>
          <div className='h-auto w-full flex flex-row justify-evenly'>
          <input type='range'
          min={4}
          max={10}
          value={length}
          onChange={(e)=>setLength(e.target.value)}
          className='h-auto w-60 cursor-pointer'></input>
          <label className='font-bold'>Length:{length}</label>
        </div>
        <div className='h-auto w-full flex flex-row justify-evenly'>
          <div className='space-x-1'>
            <input type='checkbox' defaultChecked={numbersAllowed} id='numberInput' onClick={()=>SetNumberAllowed((prev)=>!prev)}>
          </input>
          <label htmlFor='numberInput' className='font-bold'>Numbers</label>
          </div>

          <div className='space-x-1'>
            <input type='checkbox' defaultChecked={charactersAllowed} id='characterInput' onClick={()=>setcharactersAllowed((prev)=>!prev)}>
          </input>
          <label htmlFor='characterInput' className='font-bold'>Character </label>
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default App
