import { useState } from 'react'
import './App.css'
import MotivationalQuote from './MotivationalQuote';
import React from 'react';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <header>
        {/* Display the logo */}
        <img
          src="/logo.png" // Reference the logo
          alt="My Logo"
          style={{ width: '600px', margin: '20px auto' }} // Adjust size and spacing
        />
      </header>
      </div>
      <div>
      <MotivationalQuote />
      </div>
    </>
  )
}

export default App
