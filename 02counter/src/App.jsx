import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  // let counter = 5

  const addValue = () => {
    console.log("before clicked", counter);
    // counter = counter + 1;
    setCounter(counter + 1);
    console.log("after clicked", counter);
  }

  // const addValue = () => {
  //   console.log("before clicked", counter);
  //   setCounter(prevcounter => prevcounter + 1);
  //   setCounter(prevcounter => prevcounter + 1);
  //   setCounter(prevcounter => prevcounter + 1);
  //   setCounter(prevcounter => prevcounter + 1);
  //   console.log("after clicked", counter);
  // }

    const removeValue = () => {
    console.log("before clicked", counter);
    // counter = counter - 1;
    setCounter(counter - 1);
    console.log("after clicked", counter);
  }

  if (counter == 0 || counter == 20) {
    console.log("STOP");
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>

    <button id="addBtn" onClick={addValue}>Add Value</button>
    <br />
    <button id="removeBtn" onClick={removeValue}>Remove Value</button>
    <br />
    <h2>CTA: {counter}</h2>

    <h2>Footer: {counter}</h2>
    </>
  )
}

export default App