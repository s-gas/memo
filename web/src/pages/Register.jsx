import { useState } from 'react'
import Input from '../components/Input'
import auth from '../services/auth'

const Register = () => {
  const [form, setForm] = useState({username: '', email: '', password: '', confirmPassword: ''});
  const [submit, setSubmit] = useState(false);

  const validate = () => {
    return (
      form.email.includes('@') &&
      form.password.length >= 8 &&
      form.password === form.confirmPassword
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    if (!validate()) {
      console.log("invalid form");
      return;
    }
    auth
      .register(form)
      .then(() => console.log("success"))
      .catch(() => console.log("failure"))
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <Input name="username" setForm={setForm} form={form} submit={submit}/>
        <Input name="email" setForm={setForm} form={form}
          validate={() => form.email.includes('@')} message="Invalid email" submit={submit} />
        <Input name="password" setForm={setForm} form={form}
          validate={() => form.password.length >= 8} message="Passwords must be at least 8 characters long" submit={submit}/>
        <Input name="confirmPassword" setForm={setForm} form={form}
          validate={() => form.password === form.confirmPassword} message="Passwords don't match" submit={submit}/>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register
