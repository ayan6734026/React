import React from 'react'
import Login from './Component/Login.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'
import Profile from './Component/Profile.jsx'


function App() {
  return (
    <UserContextProvider>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App