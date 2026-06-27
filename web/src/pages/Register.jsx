import { useState } from 'react'
import Input from '../components/Input'

const Register = () => {
  const [form, setForm] = useState({username: '', email: '', password: '', confirmPassword: ''});

  const validate = () => {
    return (
      form.email.includes('@') &&
      form.password.length >= 8 &&
      form.password === form.confirmPassword
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      console.log("invalid form");
      return;
    )
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <Input name="username" setForm={setForm} form={form}/>
        <Input name="email" setForm={setForm} form={form}
          validate={() => form.email.includes('@')} message="Invalid email" />
        <Input name="password" setForm={setForm} form={form}
          validate={() => form.password.length >= 8} message="Passwords must be at least 8 characters long" />
        <Input name="confirmPassword" setForm={setForm} form={form}
          validate={() => form.password === form.confirmPassword} message="Passwords don't match" />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register
