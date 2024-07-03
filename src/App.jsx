import { useState } from 'react'
import './App.css'
import Timer from './Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Timer />
    </div>
  )
}

export default App
