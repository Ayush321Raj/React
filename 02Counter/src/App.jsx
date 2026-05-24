import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 0; 

  const addValue = () => {
    counter += 1;
    setCounter(counter);
    console.log("Clicked : ", counter);
  }

  const removeValue = () => {
    counter -= 1;
    setCounter(counter);
    console.log("Clicked : ", counter);
    
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value : {counter}</h2>

    <span><button
    onClick={addValue}
    >Add Value</button></span>
    <br />
    <span><button
      onClick={removeValue}
    >
      Remove Value
    </button></span>
    </>
  )
}

export default App
