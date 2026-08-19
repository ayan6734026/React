import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import Name from './name.jsx'

// function ReactElement(){
//     return(
//         <a href="https://www.google.com" target="_blank">Visit Google</a>
//     )
// }

// Type-1 
// const ReactElement=(
//     <a href="https://www.google.com" target="_blank">Visit</a>
// )

// Type-2
// const ReactElement=React.createElement( //React default types to take or parsing html content under jsx as tree as like this
//     "a",
//     {
//         href:"https://www.google.com",
//         target:"_blank"
//     },
//     "visit"
// )


// ReactDom.createRoot(document.getElementById('root')).render(
    // ReactElement()
    // <ReactElement/> //if func name start with small letter it's not render or execute
    // React has some rule to start the function name or named word's first letter should always start with block letter
//     ReactElement
// )
