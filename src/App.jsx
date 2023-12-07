import { useState } from 'react'
import './App.css'
import HomePage from "./pages/HomePage"
import { Route, Routes } from 'react-router-dom'

function App() {
  console.log('hello app')
  return (
    <Routes>
      <Route path ="/" element={<HomePage/>}></Route>
      <Route path = "/createbusiness" element = {<createBusiness/>}></Route>
      <Route path="/createevents" element={<createEvent/>}></Route>
       </Routes>
  )
}

export default App
