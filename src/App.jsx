import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting.jsx'
import { Farewell } from "./components/Farewell.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello world!</h1>
      <Greeting/>
      <Farewell/>
    </>
  )
}

export default App
