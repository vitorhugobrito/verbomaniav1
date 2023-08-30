import React from 'react'
import Home from './Components/pages/Home'
import Initial from './Components/pages/Initial'
import Result from './Components/pages/Result'
import style from '../src/App.css?inline'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" exact element={<Initial/>}></Route>
        <Route path="/jogar" element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App


