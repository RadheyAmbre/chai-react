import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const anotherElement = (
//   <a href="https://google.com" target="_blank">Another Element | Visit Google</a>
// )

const anotherUser = " RARA"

const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target: '_blank'},
  'Click me to visit Google!',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  
  // anotherElement
  
  reactElement
)