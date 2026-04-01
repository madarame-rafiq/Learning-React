import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'


// const newElem = ()=>{
//   return (
//     <h5>Usogui is peak fiction</h5>
//   )
// }

// const newElem = (
//   return(
//     <p>bdjfb fdsbjkfdjf dbsjf dskfj</p>
//   )
// )

// const newElem = (
//   <h3>Hellow</h3>
// )

const elm = React.createElement(
  'a',
  {
    href: "https://www.google.com",
    target: "_blank"
  },
  "click here for surprise"
)

createRoot(document.getElementById('root')).render(

  // Component imported from other file
    // <App />

  // Since Components are nothing but "functions" we can also use them the OG way
    // App()

  // newElem

  // created from reacts in-built createElement() method
  elm
)
