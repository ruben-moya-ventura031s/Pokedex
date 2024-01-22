import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import PokedexPage from './Pages/PokedexPage'
import PokedexidPage from './Pages/PokedexidPage'
import ProtectedRoutes from './Pages/ProtectedRoutes'


function App() {



  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<PokedexPage />} />
          <Route path='/pokedex/:id' element={<PokedexidPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
