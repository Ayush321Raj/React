import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

// const reactElement = {
//     type: "a",
//     props: {
//         href: "https://www.google.com",
//         target: "_blank"
//     },
//     children: "Click me to go to Google"
// }

const anotherElement = (
  <a href='https://google.com' target='_blank'>Click me to go to Google</a>
)

const reactElement = React.createElement(
  "a",
  {
    href: "https://www.google.com",
    target: 
    "_blank"
  },
  "Click me to go to Google"
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <MyApp />
  // </StrictMode>,

  reactElement
)
