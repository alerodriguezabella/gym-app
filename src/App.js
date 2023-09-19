import React from 'react'
import './App.css'
import ExcerciseDetail from './pages/ExcerciseDetail'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Route, Routes} from 'react-router-dom'
import {Box} from '@mui/material'

const App = () => {
  return (
    <Box width='400px' sx={{width: {xl: '1488px'}}} m='auto'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/rxersice/:id' element={<ExcerciseDetail/>} />
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App