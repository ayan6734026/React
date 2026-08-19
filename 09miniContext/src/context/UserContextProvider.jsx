import React, { useState } from 'react'
import userContext from './userContext'

function UserContextProvider({children}) {
    const [user,setUser] = useState(null)
// Pass as it is in the children

  return (
    <userContext.Provider value={{user,setUser}}>
        {/* This(user,setuser) set as a global variable */}
        {children} 
    </userContext.Provider>
  )
}

export default UserContextProvider