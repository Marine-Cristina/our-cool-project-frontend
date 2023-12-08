import { useState } from 'react'
import './App.css'
import HomePage from "./pages/HomePage"
import { Route, Routes } from 'react-router-dom'
import DetailsBusinessPage from './pages/DetailsBusinessPage'
import CreateBusiness from './components/CreateBusiness'
import CreateEvents from './components/CreateEvents'
import DetailsEventsPage from './pages/DetailsEventsPage'
import DeleteBusiness from './components/DeleteBusiness'


function App() {
  console.log('hello app')
  return (
    <Routes>
      <Route path ="/" element={<HomePage/>}></Route>
      <Route path = "/businesses" element = {<CreateBusiness/>}></Route>
      <Route path="/events" element={<CreateEvents/>}></Route>
      <Route path="/detailsbusiness" element={<DetailsBusinessPage/>}></Route>
      <Route path="/detailevents" element={<DetailsEventsPage/>}></Route>
      <Route path="/deletebusiness" element={<DeleteBusiness/>}></Route>
       </Routes>
  )
}

export default App
