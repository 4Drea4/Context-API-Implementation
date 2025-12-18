import { useState } from 'react'
import { TodoContext } from './contexts/TodoContext'
import './App.css'

function App(){


  return (
    <main>
      <TodoInput/>
      <TodoList/>
    </main>
  )
}
 

export default App;
