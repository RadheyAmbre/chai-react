import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo.jsx'
import Todos from './components/Todos'

function App() {

  return (
    <>
    <h1>Redux Toolkit Todo App</h1>
    <AddTodo />
    <Todos />
    </>
  )
}

export default App
