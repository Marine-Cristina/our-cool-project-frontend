import { useState } from 'react'
import './App.css'
import HomePage from "./pages/HomePage"
import { Route, Routes } from 'react-router-dom'

function App() {
  console.log('hello app')
  return (
    <Routes>
      <Route path ="/" element={<HomePage/>}></Route>
       </Routes>
  )
}

export default App
