import { useState } from 'react'
import axios from 'axios'
import auth from '../services/auth'

function RegisterForm() {
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const credentials = { email, password };
    auth.register(credentials);
  }

  return (
    <form className="authForm" onSubmit={handleSubmit}>
      <div className="field">
        <label>Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Password</label>
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="submitButton" type="submit">Register</button>
    </form>
  )
}

export default RegisterForm
