import { useState } from 'react'
import './App.css'
import Home from './Home'
import Remove from './Remove'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Update from './Update'


function App() {

  return (
    <>
    <BrowserRouter>
    <Home/>
    <Remove/>
    <Routes>
      <Route path='/update/:id' element={<Update/>}/>
    </Routes>
    </BrowserRouter>
   

    </>
  )
}

export default App
