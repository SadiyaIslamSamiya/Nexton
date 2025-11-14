import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router'
import Layout_1 from './Layouts/Layout_1'
import Home from './pages/Home'

const App = () => {
  
  const myRouter = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element ={<Layout_1/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Route>
  ))
  
  return (
    <div>
      <RouterProvider router={myRouter}/>
    </div>
  )
}

export default App
