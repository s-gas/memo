import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../components/Input'
import auth from '../services/auth'

const Register = () => {
  const [form, setForm] = useState({username: '', email: '', password: '', confirmPassword: ''});
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null)

  const navigate = useNavigate();

  const validate = () => {
    return (
      form.email.includes('@') &&
      form.password.length >= 8 &&
      form.password === form.confirmPassword
    )
  }

  const handleChange = (e) => {
    setError(false);
    setErrorMessage(null);
    setForm({...form, [e.target.name]: e.target.value});
    setSubmit(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);
    if (!validate()) {
      console.log("invalid form");
      return;
    }
    try {
      await auth.register(form);
      navigate("/registration-complete");
    } catch (err) {
      setError(true);
      setErrorMessage(`An account with this ${err.response.data.err}. Please enter another one.`)
    }
  }

  return (
    <div className="page">
      <h1>Sign up</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        <Input name="username" value={form.username} handler={handleChange} submit={submit}/>
        <Input name="email" value={form.email} handler={handleChange}
          validate={() => form.email.includes('@')} message="Invalid email" submit={submit} />
        <Input name="password" value={form.password} handler={handleChange}
          validate={() => form.password.length >= 8} message="Passwords must be at least 8 characters long" submit={submit}/>
        <Input name="confirmPassword" value={form.confirmPassword} handler={handleChange}
          validate={() => form.password === form.confirmPassword} message="Passwords don't match" submit={submit}/>
        <button className="submit-button" type="submit">Sign up</button>
        <p className="auth-link">Already registered? <Link to="/login">Log in</Link></p>
      </form>
      {error && <p className="auth-error">{errorMessage}</p>}
    </div>
  )
}

export default Register
