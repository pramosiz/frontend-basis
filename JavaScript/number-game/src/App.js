import React from 'react'
import './App.css'
import Title from './resources/scripts/title'
import Game from './resources/scripts/game'

function App() {
  return (
    <div className='App'>
      <Title />
      <Game limit='10' />
    </div>
  )
}

export default App