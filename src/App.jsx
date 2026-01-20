import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Cities from './pages/Cities'
import Country from './pages/Country'
import Tours from './pages/ToursPage'
import Hotels from './pages/Hotels'
import Destination from './pages/Destination'
import Sidebar from './components/Sidebar'
import LoginPage from './pages/LoginPage'

const App = () => {
  const token = localStorage.getItem("token");
  
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnHover
        draggable
      />

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={token ? <Sidebar /> : <Navigate to="/" />} >
          <Route path="admin/country" element={<Country />} />
          <Route path="admin/cities" element={<Cities />} />
          <Route path="admin/tours" element={<Tours />} />
          <Route path="admin/hotels" element={<Hotels />} />
          <Route path="admin/destination" element={<Destination />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
