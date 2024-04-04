import { useState } from 'react'

import './App.css'

function App() {



  return (
    <>
      <Namewithbutton />
      <Name name="Ushmita" />
    </>
  )
}
function Name({ name }) {
  return (

    <>

      <h1> my name is {name}</h1>
    </>
  )
}
function Namewithbutton() {
  const [random, setRandom] = useState("Rishita")
  function randomValueGenerator() {
    let value = Math.random();
    setRandom(value);
  }

  return (
    <>
      <button onClick={randomValueGenerator}> Change first name</button>
      <Name name={random} />
    </>
  )
}
export default App
