import { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/Input'
import auth from '../services/auth'

const Login = () => {
  const [form, setForm] = useState({username: '', password: ''});
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null)

  const handleChange = (e) => {
    setError(false);
    setForm({...form, [e.target.name]: e.target.value});
    setSubmit(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);
    try {
      const response = await auth.login(form);
      const token = response.data.token;
      window.localStorage.setItem('token', token);
    } catch (err) {
      setError(true);
      setErrorMessage("Invalid credentials");
    }
  }

  return (
    <div className="page">
      <h1>Log in</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        <Input name="username" value={form.username} handler={handleChange} submit={submit}/>
        <Input name="password" value={form.password} handler={handleChange} submit={submit}/>
        <button className="submit-button" type="submit">Log in</button>
      </form>
      <p>Don't have an account? <Link to="/register">Sign up</Link></p>
      {error && <p className="auth-error">{errorMessage}</p>}
    </div>
  )
}

export default Login
