import * as React from 'react'
import { useState } from 'react'
import './app.css'

const App: React.FC = () => {
  const [count, setCount] = useState(0)
  return (
    <div className='app'>
      <header className='app-header'>
        <p>Vite + React + TypeScript</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            Count: {count}
          </button>
        </p>
      </header>
    </div>
  )

}

export default App
