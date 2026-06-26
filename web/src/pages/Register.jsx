import { useState } from 'react'
import Messages from '../components/Messages'

const Register = () => {
  const [form, setForm] = useState({username: '', email: '', password: '', confirmPassword: ''});
  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  } 

  const validate = () => {
    console.log("validate");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username
            <input type="text" name="username" onChange={(e) => handleChange(e)}/>
          </label>
        </div>
        <div>
          <label>Email
            <input type="text" name="email" onChange={(e) => handleChange(e)}/>
          </label>
        </div>
        <div>
          <label>Password
            <input type="text" name="password" onChange={(e) => handleChange(e)}/>
          </label>
        </div>
        <div>
          <label>Confirm Password
            <input type="text" name="confirmPassword" onChange={(e) => handleChange(e)}/>
          </label>
        </div>
        <button type="submit">Register</button>
        <Messages messages={messages} />
      </form>
    </div>
  )
}

export default Register
