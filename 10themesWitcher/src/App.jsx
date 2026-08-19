import { useEffect, useState } from 'react'
import {ThemeProvider} from "./Context/ThemeContext"
import Card from './Component/Card'
import Themebtn from './Component/Themebtn'

function App() {
 const [themeMode,setThemeMode]=useState("light")

 const darkMode=()=>{
  setThemeMode("dark")
 }

 const lightMode=()=>{
  setThemeMode("light")
 }

 useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
 },[themeMode])

  return (
  <ThemeProvider value={{themeMode,darkMode,lightMode}}>
    <div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
      <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
        <Themebtn/>
      </div>

      <div className="w-full max-w-sm mx-auto">
        <Card/>
      </div>
    </div>
  </div>
  </ThemeProvider>
  )
}

export default App
