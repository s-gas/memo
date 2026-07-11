import { Route, Routes, Navigate } from 'react-router-dom'
import Register from './pages/Register'
import RegistrationComplete from './pages/RegistrationComplete'
import Login from './pages/Login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/register" element={<Register />} />
      <Route path="/registration-complete" element={<RegistrationComplete />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
