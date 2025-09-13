import React from 'react'
import { NavBar } from './Components/NavBar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './Routes/Home'
import { Productos } from './Routes/Productos'
import { Carrito } from './Routes/Carrito'

export const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/'element = { <Home/>} ></Route>
        <Route path='/productos' element = { <Productos/> } ></Route>
        <Route path='/carrito' element = { <Carrito/> } ></Route>
        <Route path='/*' element = { <Navigate to = '/'/> } ></Route>
      </Routes>
    </>
  )
}
