import React, { useContext, useState } from 'react'
import userContext from '../context/userContext'



function Login() {
  
  const [userName,setuserName]=useState("")
  const [password,setPassword]=useState("")

  const {setUser} =useContext(userContext)

  const Submit=(e)=>{
    e.preventDefault()
    setUser({userName,password})
  }


  return (
    <div className='h-screen w-full bg-cyan-950 flex items-center justify-center'>
      <div className='h-auto w-auto border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 flex flex-col gap-5'>
      <div className='text-center font-bold text-2xl'>
        LogIn Page
      </div>
        <div className='flex flex-col gap-10'>
          <input 
        className='h-auto w-50 px-1 bg-amber-200 rounded-md outline-none'
        type='text'
        placeholder='userName'
        value={userName}
        onChange={(e)=>setuserName(e.target.value)}
        />
        <input 
        className='h-auto w-50 px-1 bg-amber-200 rounded-md outline-none'
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        
        </div>
        <button onClick={Submit} className='rounded-xl bg-amber-300 font-semibold'>Login</button>
      </div>
    </div>
  )
}

export default Login