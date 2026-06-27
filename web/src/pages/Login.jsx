import { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/Input'
import auth from '../services/auth'

const Login = () => {
  return (
    <div className="page">
      <h1>Login</h1>
      <p>Don't have an account? <Link to="/register">Signup</Link></p>
    </div>
  )
}

export default Login
