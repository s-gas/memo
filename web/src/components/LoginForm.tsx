import { useState } from 'react'

function LoginForm() {
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')

  function handleSubmit(e: React.FormEvent) {
     e.preventDefault()
     console.log(email)
     console.log(password)
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
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button className="submitButton" type="submit">Sign in</button>
    </form>
  )
}

export default LoginForm
