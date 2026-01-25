import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Sidebar from './components/Sidebar'
import LoginPage from './pages/LoginPage'
import Actor from './pages/Actor'
import Category from './pages/Category'
import Director from './pages/Director'
import Movie from './pages/Movie'
import Genre from './pages/Genre'
import MovieActor from './components/MovieActor'
import MovieCategory from './components/MovieCategory'
import MovieDirector from './components/MovieDirector'
import MovieGenre from './components/MovieGenre'

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
          <Route path="admin/actor" element={<Actor />} />
          <Route path="admin/movie-actor" element={<MovieActor />} />
          <Route path="admin/movie-category" element={<MovieCategory />} />
          <Route path="admin/movie-director" element={<MovieDirector />} />
          <Route path="admin/movie-genre" element={<MovieGenre />} />
          <Route path="admin/category" element={<Category />} />
          <Route path="admin/director" element={<Director />} />
          <Route path="admin/genre" element={<Genre />} />
          <Route path="admin/movie" element={<Movie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
