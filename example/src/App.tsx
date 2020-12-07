import React from 'react'

import { ExampleComponent, Clock } from 'clock'
import 'clock/dist/index.css'

const App = () => {
  return (
  <div>
    <ExampleComponent text="Create React Library Example 😄" />
    <Clock hours={12} minutes={33} />
  </div>
  )
}

export default App

